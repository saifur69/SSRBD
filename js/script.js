// কার্টের জন্য জাভাস্ক্রিপ্ট
let cart = [];

// প্রোডাক্ট কার্টে যোগ করা
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(productName + " কার্টে যোগ হয়েছে।");
    renderCart();
}

// কার্ট দেখানোর ফাংশন
function renderCart() {
    let cartDiv = document.getElementById('cart');
    if (!cartDiv) return; // যদি কোন পেজে কার্ট না থাকে

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>কার্ট খালি আছে।</p>';
        return;
    }

    let html = '<ul>';
    cart.forEach((item, index) => {
        html += `<li>${item.name} - ${item.price}৳ <button onclick="removeFromCart(${index})">মুছে ফেলুন</button></li>`;
    });
    html += `</ul><p>মোট: ${cart.reduce((sum, item) => sum + item.price, 0)}৳</p>`;
    html += '<button onclick="checkout()">চেকআউট</button>';
    cartDiv.innerHTML = html;
}

// কার্ট থেকে প্রোডাক্ট মুছে ফেলা
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// চেকআউট বেসিক
function checkout() {
    if (cart.length === 0) {
        alert("কার্ট খালি!");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert("চেকআউট সম্পন্ন! মোট পরিমাণ: " + total + "৳\nপেমেন্ট বিকাশ/নগদ/ব্যাংকের মাধ্যমে করতে হবে।");
    cart = [];
    renderCart();
}
function checkout() {
    if (cart.length === 0) {
        alert("কার্ট খালি!");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);

    // পেমেন্ট লিংক দেখানো
    let paymentHtml = `
        <p>চেকআউট সম্পন্ন! মোট পরিমাণ: ${total}৳</p>
        <p>পেমেন্ট করতে পারেন:</p>
        <ul>
            <li><a href="https://www.bkash.com/" target="_blank">বিকাশ</a></li>
            <li><a href="https://www.nagad.com.bd/" target="_blank">নগদ</a></li>
            <li>ব্যাংক ট্রান্সফার: ব্যাংক একাউন্ট নম্বর +০০৮৮ ০০১৭৪৮-৪২২২১৪</li>
        </ul>
    `;
    document.getElementById('cart').innerHTML = paymentHtml;

    cart = [];
}
