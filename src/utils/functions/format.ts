export function formatDate(dateString: any, isRemoveDate: boolean = false) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (isRemoveDate) {
        return `${month}/${year}`;
    }
    return `${day}/${month}/${year}`;
}

export function getTimeToDisplay(time: any) {
    const format = new Date(time)
    let hh: any = format.getHours()
    let mm: any = format.getMinutes()

    if (hh < 10) {
        hh = "0" + hh
    }
    if (mm < 10) {
        mm = "0" + mm
    }

    return hh + ":" + mm
}

export function formatCurrency(number: number = 0) {
    // Sử dụng hàm toLocaleString() để định dạng số thành chuỗi với định dạng tiền tệ
    const formattedNumber = number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const replacedCurrency = formattedNumber.replace('₫', 'VNĐ');
    return replacedCurrency;
  }