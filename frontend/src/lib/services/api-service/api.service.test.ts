import { HttpMethod } from '../../enums/common.enums';
import ApiService from './api.service';

global.fetch = jest.fn();

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService('http://example.com', 'test-token');
    (fetch as jest.Mock).mockClear();
  });

  it('should fetch all resources', async () => {
    const response = [{ id: '1', name: 'Resource 1' }];
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ data: response }),
    });

    const result = await apiService.fetchAll('endpoint');

    expect(result).toEqual(response);
    expect(fetch).toHaveBeenCalledWith(
      'http://example.com/api/endpoint?populate=*',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer test-token',
        },
      },
    );
  });

  it('should fetch one resource by ID', async () => {
    const response = { id: '1', name: 'Resource 1' };
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ data: response }),
    });

    const result = await apiService.fetchOne('endpoint/1', '1');

    expect(result).toEqual(response);
    expect(fetch).toHaveBeenCalledWith('http://example.com/api/endpoint/1', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer test-token',
      },
    });
  });

  it('should throw an error if resource not found by ID', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(apiService.fetchOne('endpoint/1', '1')).rejects.toThrow(
      'Failed to fetch data from endpoint/1: Not Found',
    );
  });

  it('should create a resource', async () => {
    const requestBody = { name: 'New Resource' };
    const response = { id: '1', name: 'New Resource' };
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ data: response }),
    });

    const result = await apiService.create('endpoint', requestBody);

    expect(result).toEqual(response);
    expect(fetch).toHaveBeenCalledWith('http://example.com/api/endpoint', {
      method: HttpMethod.POST,
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer test-token',
      },
    });
  });

  it('should update a resource', async () => {
    const requestBody = { name: 'Updated Resource' };
    const response = { id: '1', name: 'Updated Resource' };
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ data: response }),
    });

    const result = await apiService.update('endpoint', '1', requestBody);

    expect(result).toEqual(response);
    expect(fetch).toHaveBeenCalledWith('http://example.com/api/endpoint/1', {
      method: HttpMethod.PUT,
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer test-token',
      },
    });
  });

  it('should delete a resource', async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: true });

    const result = await apiService.delete('endpoint', '1');

    expect(result).toBe(true);
    expect(fetch).toHaveBeenCalledWith('http://example.com/api/endpoint/1', {
      method: HttpMethod.DELETE,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer test-token',
      },
    });
  });

  it('should throw an error if delete fails', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(apiService.delete('endpoint', '1')).rejects.toThrow(
      'Failed to delete resource with ID 1 at endpoint endpoint: Not Found',
    );
  });
});
