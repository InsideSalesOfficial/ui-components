import { getVerifiedState } from './utils';
import { verifiedStates } from './constants';

describe('calculating neuralverify state', () => {
  it('should return VERIFIED_HIGH when state === 1 and detail === "super_verified"', () => {
    expect(getVerifiedState(1, 'super_verified')).toEqual(verifiedStates.VERIFIED_HIGH);
  });
  
  it('should return VERIFIED when state === 1 and detail === "recent_positive"', () => {
    expect(getVerifiedState(1, 'recent_positive')).toEqual(verifiedStates.VERIFIED);
  });

  it('should return CORPORATE when state === 0 and detail === "gate_keeper"', () => {
    expect(getVerifiedState(0, 'gate_keeper')).toEqual(verifiedStates.CORPORATE);
  });

  it('should return PREVIOUSLY_VERIFIED when state === 0 and detail === "previously_verified"', () => {
    expect(getVerifiedState(0, 'previously_verified')).toEqual(verifiedStates.PREVIOUSLY_VERIFIED);
  });

  it('should return MATCHING when state === 0 and detail === "previously_prospected"', () => {
    expect(getVerifiedState(0, 'previously_prospected')).toEqual(verifiedStates.MATCHING);
  });

  it('should return NOT_ANSWERED when state === -1 and detail === "not_answered"', () => {
    expect(getVerifiedState(-1, 'not_answered')).toEqual(verifiedStates.NOT_ANSWERED);
  });

  it('should return STALE when state === -1 and detail === "bounce_list"', () => {
    expect(getVerifiedState(-1, 'bounce_list')).toEqual(verifiedStates.STALE);
  });

  it('should return FAX when state === -1 and detail === "fax_number"', () => {
    expect(getVerifiedState(-1, 'fax_number')).toEqual(verifiedStates.FAX);
  });

  it('should return VERIFIED_BAD when state === -1 and detail === "other"', () => {
    expect(getVerifiedState(-1, 'other')).toEqual(verifiedStates.VERIFIED_BAD);
  });

  it('should return MOBILE when state === 1 and detail === "recent_positive" and carrier.carrier_type === "mobile"', () => {
    expect(getVerifiedState(1, 'recent_positive', 'mobile')).toEqual(verifiedStates.MOBILE);
  });

  it('should return MOBILE_VERIFIED when state === 1 and detail === "super_verified" and carrier.carrier_type === "mobile"', () => {
    expect(getVerifiedState(1, 'super_verified', 'mobile')).toEqual(verifiedStates.MOBILE_VERIFIED);
  });

  it('should return MOBILE_NOT_ANSWERED when state === -1 and detail === "not_answered" and carrier.carrier_type === "mobile"', () => {
    expect(getVerifiedState(-1, 'not_answered', 'mobile')).toEqual(verifiedStates.MOBILE_NOT_ANSWERED);
  });

});
