const header = document.querySelector('.heading');
(animation = (a) => {
    return [...a].map((a) => `<span>${a}</span>`).join("");
    // /Hàm join sẽ nối các phần tử của mảng thành một chuỗi, các phần tử được ngăn cách nhau bởi kí tự do người dùng quy định. Nếu không truyền ký tự ngăn cách vào thì giá trị mặc định là dấu phẩy ",".
    // Ở 
}),
(header.innerHTML = animation(header.innerHTML))