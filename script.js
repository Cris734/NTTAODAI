// HIỆU ỨNG SCROLL HEADER
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// HIỆU ỨNG POP-UP THANH TÌM KIẾM (BẢN FIX 2 NÚT)
document.addEventListener('DOMContentLoaded', function() {
    // Lấy TẤT CẢ các nút tìm kiếm
    const searchIcons = document.querySelectorAll('.search-icon-trigger');
    const searchOverlay = document.getElementById('search-overlay');
    const closeSearchBtn = document.getElementById('close-search-btn');

    if (searchIcons.length > 0 && searchOverlay) {
        // Gắn sự kiện cho TỪNG NÚT
        searchIcons.forEach(function(icon) {
            icon.addEventListener('click', function(e) {
                e.preventDefault(); 
                searchOverlay.classList.add('active');
            });
        });
    }

    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
        });
    }
    
    // ======== CODE CHO TRANG CHI TIẾT SẢN PHẨM (BẢN FIX MƯỢT) ========
const mainImage = document.getElementById('main-product-image');
const thumbnails = document.querySelectorAll('.thumbnail-img');

if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach(function(thumb) {
        thumb.addEventListener('click', function() {
            // Thêm class 'fading-out' để làm mờ ảnh
            mainImage.classList.add('fading-out');
            
            // Xóa active cũ
            if (document.querySelector('.thumbnail-img.active')) {
                document.querySelector('.thumbnail-img.active').classList.remove('active');
            }
            // Thêm active mới
            thumb.classList.add('active');

            // Đợi 0.2s cho nó mờ đi, rồi mới đổi ảnh và hiện ra
            setTimeout(() => {
                mainImage.src = thumb.src;
                mainImage.classList.remove('fading-out');
            }, 200); // Phải khớp với transition: 0.3s
        });
    });
}

// Chức năng nút Số Lượng (y chang)
const qtyPlus = document.getElementById('qty-plus');
const qtyMinus = document.getElementById('qty-minus');
const qtyInput = document.getElementById('qty-input');

if (qtyPlus && qtyMinus && qtyInput) {
    qtyPlus.addEventListener('click', function() {
        qtyInput.value = parseInt(qtyInput.value) + 1;
    });
    
    qtyMinus.addEventListener('click', function() {
        if (qtyInput.value > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
        }
    });
}

// Chức năng nút Size (y chang)
const sizeOptions = document.querySelectorAll('.size-option');
if (sizeOptions.length > 0) {
    sizeOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            if (document.querySelector('.size-option.active')) {
                document.querySelector('.size-option.active').classList.remove('active');
            }
            option.classList.add('active');
        });
    });
}
});