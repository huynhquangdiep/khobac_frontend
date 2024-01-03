import { DatePicker } from "antd";

import momentGenerateConfig from "rc-picker/lib/generate/moment";

const customMomentGenerateConfig = {
  ...momentGenerateConfig,
};

const KBDatePicker = DatePicker.generatePicker(customMomentGenerateConfig);

export default KBDatePicker;
