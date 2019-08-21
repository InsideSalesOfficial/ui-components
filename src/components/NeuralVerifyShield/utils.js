import { verifiedStates } from './constants';

export const getVerifiedState = (verifiedState, verifiedDetail, carrier) => {
  const isMobile = (carrier === 'mobile');

  if (verifiedState === 1) {
    if ((/^(super_positive|super_verified)$/).test(verifiedDetail)) {
      return (isMobile) ? verifiedStates.MOBILE_VERIFIED : verifiedStates.VERIFIED_HIGH;
    } else if (verifiedDetail === 'recent_positive') {
      return (isMobile) ? verifiedStates.MOBILE : verifiedStates.VERIFIED;
    }

    return (isMobile) ? verifiedStates.MOBILE : verifiedStates.VERIFIED;
  }

  if (verifiedState === 0) {
    if (verifiedDetail === 'gate_keeper') {
      return verifiedStates.CORPORATE;
    } else if (verifiedDetail === 'previously_verified') {
      return verifiedStates.PREVIOUSLY_VERIFIED;
    } else if (verifiedDetail === 'previously_prospected') {
      return verifiedStates.MATCHING;
    }
  }

  if (verifiedState === -1) {
    if (verifiedDetail === 'not_answered') {
      return (isMobile) ? verifiedStates.MOBILE_NOT_ANSWERED : verifiedStates.NOT_ANSWERED;
    } else if (verifiedDetail === 'bounce_list') {
      return verifiedStates.STALE;
    } else if (verifiedDetail === 'fax_number') {
      return verifiedStates.FAX;
    }

    return verifiedStates.VERIFIED_BAD;
  }

  return '';
};
