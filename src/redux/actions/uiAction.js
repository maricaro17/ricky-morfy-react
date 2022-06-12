import { Types } from "../types/Types";

const startLoading = () => ({ type: Types.uiStartLoading });

const finishLoading = () => ({ type: Types.uiFinishLoading });

export { startLoading, finishLoading };