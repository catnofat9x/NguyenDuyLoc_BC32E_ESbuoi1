(tinhDTB = (...a) => {
    let b = 0;
    return (
        a.map((a) => {
            b += parseFloat(a)
        }),
        (b / a.length).toFixed(2)
    );
    //Hàm map() sẽ lặp qua từng phần tử của mảng, tham số truyền vào là một anonymous function. Hàm anonymous sẽ có một tham số truyền vào và đó chính là phần tử của mỗi vòng lặp, bên trong thân hàm anonymouse sẽ có lệnh return về một giá trị và giá trị này sẽ thay thế cho phần tử đó.
    // hàm parseFloat : Cụ thể, nếu chuỗi truyền vào được bắt đầu bằng số nguyên hoặc một số thập phân, phương thức sẽ phân tích chuỗi và trả về số đó như một số( thuộc kiểu number) chứ không phải một chuỗi như ban đầu.
    // Nếu chuỗi bắt đầu bằng các khoảng trắng, phương thức sẽ loại bỏ các khoảng trắng sau đó phân tích.
    // Nếu chuỗi bắt đầu bằng 1 dấu chấm và theo sau là một hoặc nhiều số, phương thức sẽ tự động coi đó là một số thập phân, ví dụ: '.10955' sẽ trở thành 0.10955.

}),
    (document.getElementById('btnKhoi1').onclick = () => {
        let toan = document.getElementById('inpToan').value,
            ly = document.getElementById('inpLy').value,
            hoa = document.getElementById('inpHoa').value;
        document.getElementById('tbKhoi1').innerHTML = tinhDTB(toan, ly, hoa)

    }),
    (document.getElementById('btnKhoi2').onclick = () => {
        let van = document.getElementById('inpVan').value,
            su = document.getElementById('inpSu').value,
            dia = document.getElementById('inpDia').value,
            english = document.getElementById('inpEnglish').value
        document.getElementById('tbKhoi2').innerHTML = tinhDTB(van, su, dia, english)
    });
