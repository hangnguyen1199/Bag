
export const required = (value) =>{
    return value?.trim() ? undefined : 'Không được để trống';
}

export const checked = (value) =>{
    return value ? undefined : 'Bạn vui lòng đồng ý điều khoản của chúng tôi';

}

export const email = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Mail không đúng định dạng'
        : undefined;

export const link = (value) =>
    value && !/(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,6})([/\w.-]*)*\/?/g.test(value)
        ? 'Link không đúng định dạng'
        : undefined;
export const phone = (value) =>
    value &&
  !/(090|093|070|072|079|077|076|078|089|088|091|094|083|084|085|081|082|032|033|034|035|036|037|038|039|086|096|097|098|099|059|092|052|056|058)+([0-9]{7})\b/i.test(
      value,
  )
        ? 'Số điện thoại sai định dạng'
        : undefined;

export const passwordCheck = (value) =>
    value &&
  !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/gm.test(value)
        ? 'Mật khẩu phải bằng hoặc hơn 8 ký tự bao gồm ít nhất 1 chữ cái và nhỏ hơn 30 ký tự.'
        : undefined;

export const confirmPassword = (value, allValues) => {
    return value != allValues.password ? 'Mật khẩu không trùng khớp' : undefined;
};

export const checkPIN = (value) =>
    value && !/^[0-9]{6,}$/gm.test(value)
        ? 'Mã PIN phải đủ 6 ký tự & chỉ chứa số'
        : undefined;
export const checkPinSpecial = (value) =>
    '0123456789876543210/111111/222222/333333/444444/555555/666666/777777/888888/999999/000000'.includes(
        value,
    )
        ? 'Vui lòng không nhập mã PIN dễ đoán'
        : undefined;
;

export const requiredByTakenValue6 = (value, allValues) =>
    allValues.TakeRecruitmentInfoBy == 6 && !value
        ? '* Không được để trống'
        : undefined;
