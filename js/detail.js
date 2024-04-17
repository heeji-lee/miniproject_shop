// quantity
document.addEventListener("DOMContentLoaded", function() {
    // 가격 요소 가져오기
    const priceElement = document.querySelector("#price");
    // 가격 정보 추출
    const priceText = priceElement.textContent;
    // 숫자만 추출
    const price = parseInt(priceText.replace(/\D/g, ''));
    // 수량을 표시하는 input 요소 가져오기
    const quantityInput = document.querySelector(".quantity");
    // 수량 증가 버튼 가져오기
    const increaseBtn = document.querySelector(".btn-up");
    // 수량 감소 버튼 가져오기
    const decreaseBtn = document.querySelector(".btn-dw");

    // 수량이 변경될 때마다 총 가격을 업데이트하는 함수
    function updateTotalPrice() {
        // 현재 수량 가져오기
        const quantity = parseInt(quantityInput.value);
        // 총 가격 계산
        const totalPrice = price * quantity;
        // 화면에 총 가격 표시
        document.querySelector("span").textContent = numberWithCommas(totalPrice);
    }

    // 수량 증가 버튼 클릭 이벤트 처리
    increaseBtn.addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지
        // 현재 수량 가져오기
        let currentQuantity = parseInt(quantityInput.value);

        // 수량이 20 이상일 때
        if (currentQuantity < 20) {
            // 수량 증가
            currentQuantity++;
            // 증가된 수량을 input 요소에 반영
            quantityInput.value = currentQuantity;
            // 총 가격 업데이트
            updateTotalPrice();
        } else {
            alert('선택하신 상품의 옵션은 수량이 부족합니다. 수량을 조절해주세요.');
        }        
    });

    // 수량 감소 버튼 클릭 이벤트 처리
    decreaseBtn.addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지

        // 현재 수량 가져오기
        let currentQuantity = parseInt(quantityInput.value);

        // 수량이 1 이상일 때만 감소
        if (currentQuantity > 1) {
            // 수량 감소
            currentQuantity--;
            // 감소된 수량을 input 요소에 반영
            quantityInput.value = currentQuantity;
            // 총 가격 업데이트
            updateTotalPrice();
        } else {
            alert('해당 상품은 최소구매 수량이 1개 입니다.');
        }
    });
});

// 숫자를 쉼표가 포함된 문자열로 변환하는 함수
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// pay
function kg_request_pay() {
    var IMP = window.IMP;
        IMP.init('imp67175823');
        IMP.request_pay({
            pg: 'html5_inicis', 
            pay_method: 'card',
            // merchant_uid: 'merchant_' + new Date().getTime(),
            name: '짱구는 못말려 크레용 키즈 유니폼(RED)',
            amount: 95000,
            buyer_email: 'gmlwl3277@naver.com',
            buyer_name: '이희지',
            buyer_tel: '010-7453-3277',
            buyer_addr: '부산광역시 부산진구 중앙대로 708',
            buyer_postcode: '(47291)',
            m_redirect_url: 'http://heeji0728.shop/detail.html' //결제 끝나고 랜딩되는 페이지 
            }, function (rsp) {
            console.log(rsp);
            if (rsp.success) {
            var msg = '결제가 완료되었습니다.';
            msg += '고유ID : ' + rsp.imp_uid;
            // msg += '상점 거래ID : ' + rsp.merchant_uid;
            msg += '결제 금액 : ' + rsp.paid_amount;
            // msg += '카드 승인번호 : ' + rsp.apply_num;
            location.href="http://heeji0728.shop/detail.html";
            } else {
            var msg = '결제에 실패하였습니다.';
            msg += '에러내용 : ' + rsp.error_msg;
            }
            alert(msg);
        });
}