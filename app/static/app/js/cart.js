var updateBtns = document.getElementsByClassName('update-cart')

for (i=0;i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId',productId,'action',action)
        console.log('user: ',user)
        if (user === "AnonymousUser"){
            console.log('user not logged in')
        }
        else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action){
    console.log('user logged in, success add')
    var url = '/update_item/'
    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({'productId':productId,'action':action})
    })
    .then((response) => {
        if (!response.ok) {
            // error processing
            throw 'Error';
        }
        return response.json()
    })
    .then((data) => {
        console.log('data',data)
        location.reload()
    })
}
// $('.carousel').carousel()

document.getElementById('cart-button').addEventListener('click', function() {
    // Kiểm tra trạng thái đăng nhập
    var isAuthenticated = "{{ user.is_authenticated }}";

    // Nếu người dùng chưa đăng nhập, hiển thị thông báo
    if (isAuthenticated === "False") {
        alert("Bạn chưa đăng nhập. Vui lòng đăng nhập để xem giỏ hàng.");
        // Nếu bạn muốn chuyển hướng người dùng đến trang đăng nhập, thêm dòng sau:
        // window.location.href = "/login/";
    } else {
        // Nếu đã đăng nhập, thực hiện các thao tác khác, ví dụ mở giỏ hàng
        // window.location.href = "/cart/";
    }
});