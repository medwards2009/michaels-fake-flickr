export interface WaitTime {
  id: string;
  waitTime: number | null;
  status: string;
  active: boolean;
  lastUpdate: string;
  name: string;
  fastPass: boolean;
  meta: Meta;
}

interface Meta {
  type: string;
  longitude: number;
  latitude: number;
  entityId: string;
  singleRider: boolean;
}
