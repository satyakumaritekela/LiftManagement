const BACKEND_URL = 'http://localhost:8000';

const get = async (path: string): Promise<any> => {
  try {
    const url = new URL(path, BACKEND_URL);
    const response = await fetch(url.href, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
  } catch (e) {
    console.error(e);
    return Promise.reject(new Error('Failed to get data'));
  }
};

const post = async (path: string, body: any): Promise<any> => {
    try {
      const url = new URL(path, BACKEND_URL);
      const response = await fetch(url.href, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        return response.json();
      } else {
        const error = await response.json();
        return Promise.reject(new Error(error.msg));
      }
    } catch (e) {
      console.error(e);
      return Promise.reject('Failed to post data');
    }
};

export const setupElevatorSystem = async (count: number) => {
    try {
        return await post(`/api/system/`, {
          count,
        });
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const addLiftToSystem = async () => {
    try {
        return await post(`/api/system/addLift`, {});
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const getLiftStatus = async (id: string) => {
    try {
        return await get(`/api/operation/${id}`);
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const callLift = async (id: string, userFloor: number) => {
    try {
        return await post(`/api/operation/callLift`, {
            liftId: id,
            userFloor,
        });
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const moveLift = async (id: string, destinationFloor: number) => {
    try {
        return await post(`/api/operation/movelift`, {
            liftId: id,
            destinationFloor,
        });
    } catch (e) {
        console.error(e);
        return null;
    }
};