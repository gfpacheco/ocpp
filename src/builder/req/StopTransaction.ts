import Call from '../Call';
import Reason from '../../enum/Reason';
import {MeterValue} from '../../type/MeterValue';

export type StopTransactionPayload = {
  idTag?: string;
  meterStop: number;
  timestamp: string;
  transactionId: number;
  reason?: Reason;
  transactionData: MeterValue[];
};

export default class StopTransaction extends Call {
  constructor(public payload?: StopTransactionPayload) {
    super();
  }
}
