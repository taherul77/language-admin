import { z } from 'zod';

export const rowSchema = z.object({
  gpsDataId: z.string().nullable(),
  mkgProfNo: z.string(),
  employeNo: z.string().nullable(),
  employeName: z.string(),
  gpsDataDate: z.number(),
  gpsDataTime: z.string(),
  gpsDataFlag: z.number(),
  saUsersId: z.string(),
  gpsDataDateTime: z.number(),
  gpslocalName: z.string(),
  bateryPct: z.string(),
  intCxnType: z.string(),
  pwrsvMode: z.string(),
  locsharType: z.string().nullable(),
  toolTipTxt: z.string(),
  profPhoto: z.string(),
  mlatitute: z.number(),
  mlongitute: z.number(),
});
