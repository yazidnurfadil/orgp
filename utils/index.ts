import { EventType, ParticipantStatus } from "@/types";

export const getColorBasedOnStatus = (status: ParticipantStatus) => {
  if (status === ParticipantStatus.APPROVED) {
    return "success";
  } else if (status === ParticipantStatus.REJECTED) {
    return "warning";
  } else if (status === ParticipantStatus.CHECKED_IN) {
    return "primary";
  } else if (status === ParticipantStatus.SUBMITTED) {
    return "secondary";
  } else {
    return "default";
  }
};

export const getColorBasedOnEventType = (type: EventType) => {
  if (type === "ILMIAH") {
    return "danger";
  } else if (type === "ETC") {
    return "warning";
  } else if (type === "OLAHRAGA") {
    return "primary";
  } else {
    return "primary";
  }
};
