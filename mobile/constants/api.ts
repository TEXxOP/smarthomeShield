import { Platform } from 'react-native';

// Replace with your PC's Local IP Address (e.g., 192.168.1.X)
const LOCAL_IP = '192.168.1.14'; // Updated based on system check

const getBaseUrl = () => {
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    return `http://${LOCAL_IP}:8000`;
  }
  return 'http://localhost:8000';
};

export const API_URL = getBaseUrl();

export interface Device {
  id: string;
  ip_address: string;
  device_type: string;
  risk_score: number;
  status: string;
}

export interface Alert {
  id: number;
  timestamp: string;
  severity: string;
  description: string;
  source: string;
}

export const fetchDevices = async (): Promise<Device[]> => {
  const response = await fetch(`${API_URL}/devices`);
  return response.json();
};

export const fetchAlerts = async (): Promise<Alert[]> => {
  const response = await fetch(`${API_URL}/alerts`);
  return response.json();
};

export const isolateDevice = async (deviceId: string) => {
  const response = await fetch(`${API_URL}/device/${deviceId}/isolate`, {
    method: 'POST',
  });
  return response.json();
};
