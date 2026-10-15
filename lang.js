// English / Vietnamese switcher. The English text lives in index.html (the
// default); this file holds the Vietnamese version of every element marked
// with data-i18n. The choice is remembered per visitor, and ?lang=vi opens
// the page in Vietnamese directly (handy for sharing).

const VI = {
    'page.title': 'Vương Anh Vũ | Hồ sơ năng lực',

    'about.title': 'Giới thiệu',
    'about.text': 'Tôi tên là Vương Anh Vũ. Tôi là một kỹ sư có kỹ năng tiếng Anh tốt, với chứng chỉ IELTS 8.0. Tôi luôn bị cuốn hút bởi cách máy tính biến ý tưởng thành hiện thực, và chính điều đó đã thôi thúc tôi theo đuổi con đường phát triển web. Với tốc độ triển khai chưa từng có nhờ các công cụ AI, kết hợp cùng kỹ năng kỹ thuật, sự hiểu biết về các xu hướng hiện nay và tầm nhìn rõ ràng cho một tương lai nhiều biến động, tôi muốn giúp mọi người đưa ý tưởng của mình ra thế giới và góp phần thúc đẩy xã hội phát triển bằng công nghệ. Song song với hành trình công nghệ, tôi còn là một giáo viên tiếng Anh. Tôi tin rằng tiếng Anh là ngôn ngữ của thế giới ngày nay, nơi công nghệ dẫn dắt mọi thứ, và tôi đam mê giúp thế hệ trẻ Việt Nam làm chủ ngôn ngữ này để có một tương lai tươi sáng hơn. Việc giảng dạy cho phép tôi trao cho học sinh những công cụ cần thiết để kết nối với thế giới và mở ra nhiều cơ hội. Ngoài công việc, tôi thích chơi tennis để luôn năng động và giữ tinh thần cạnh tranh, và tôi tìm thấy sự bình yên trong thiên nhiên, giúp cân bằng cuộc sống. Tất cả những đam mê ấy tạo nên con người tôi: một lập trình viên, một giáo viên và một người không ngừng học hỏi.',

    'contact.title': 'Liên hệ',
    'contact.mail': 'Email:',
    'contact.cv': 'Xem CV của tôi (PDF, tiếng Anh)',

    'skills.title': 'Kỹ năng',

    'projects.title': 'Dự án',
    'projects.featured': 'Nổi bật',
    'projects.wake': '(có thể mất ~30 giây để khởi động)',
    'projects.live': 'Xem trực tiếp',
    'projects.code': 'Mã nguồn',

    'desc.ielts-speaking-practice': 'Trả lời bằng giọng nói các câu hỏi IELTS thật và nhận bản ghi đã được AI chỉnh sửa, điểm band ước tính kèm nhận xét, cùng câu trả lời mẫu Band 7.5+ có thể nghe lại. Xây dựng bằng React, Express và Claude API.',
    'desc.ielts-writing-practice': 'Luyện IELTS Writing Task 1 và Task 2 với đề từ các bài thi thật trong quý này. Nộp bài để xem tối đa 9 lỗi quan trọng được đánh dấu kèm cách sửa, cùng một phiên bản Band 7.5+ giữ nguyên ý của bạn. Xây dựng bằng React, Express và Claude API.',
    'desc.vietnam-itinerary-planner': 'Trợ lý AI lên kế hoạch du lịch Việt Nam: nhập số ngày, sở thích và địa điểm để nhận lịch trình từng ngày kèm nguồn trích dẫn. Sử dụng kỹ thuật truy xuất (RAG) trên kho kiến thức về Việt Nam được tuyển chọn, xây dựng bằng Python, FastAPI, Supabase pgvector và Claude API.',
    'desc.bun-cha-nha-ty': 'Ứng dụng gọi món và tính tiền cho một quán ăn Việt Nam thật: theo dõi 11 bàn trong nháy mắt, thêm món cho từng bàn, thanh toán, chỉnh sửa thực đơn và giá. Hoạt động offline ngay trên trình duyệt, viết bằng JavaScript thuần.',
    'desc.odin-book': 'Mạng xã hội full-stack có đăng nhập, xây dựng bằng Node.js, Express và cơ sở dữ liệu.',
    'desc.mini-message-board': 'Bảng tin nhắn render phía server, xây dựng bằng Node.js và Express.',
    'desc.cv-application': 'Công cụ tạo CV tương tác, xây dựng bằng React.',
    'desc.weather-app': 'Ứng dụng tra cứu thời tiết, lấy dữ liệu trực tiếp từ API thời tiết.',
    'desc.library': 'Ứng dụng theo dõi và quản lý danh sách sách cần đọc của cá nhân.',
    'desc.tic-tac-toe': 'Trò chơi cờ caro 3x3 kinh điển cho hai người, viết bằng JavaScript thuần.',
    'desc.calculator': 'Máy tính cơ bản viết bằng HTML, CSS và JavaScript.',
    'desc.etch-a-sketch': 'Ứng dụng vẽ trên lưới ô vuông, viết bằng JavaScript thuần và thao tác DOM.',
    'desc.rock-paper-scissors': 'Trò chơi oẳn tù tì kinh điển có tính điểm, viết bằng JavaScript thuần.',
    'desc.admin-dashboard': 'Giao diện trang quản trị responsive, xây dựng bằng HTML và CSS nâng cao.',
    'desc.sign-up-form': 'Form đăng ký được thiết kế chỉn chu, tập trung vào bố cục và thiết kế form bằng CSS.',
    'desc.landing-page': 'Trang landing page quảng bá dạng một trang, xây dựng bằng HTML và CSS.',
    'desc.recipes': 'Trang web danh sách công thức nấu ăn, xây dựng bằng HTML và CSS.',
};

const STORAGE_KEY = 'homepage-lang';
const elements = document.querySelectorAll('[data-i18n]');
const englishText = new Map([...elements].map((el) => [el, el.textContent]));
const englishTitle = document.title;

function applyLanguage(lang) {
    elements.forEach((el) => {
        const key = el.dataset.i18n;
        el.textContent = lang === 'vi' && VI[key] ? VI[key] : englishText.get(el);
    });
    document.title = lang === 'vi' ? VI['page.title'] : englishTitle;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-switch button').forEach((btn) => {
        btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
}

function savedLanguage() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
        return null; // storage blocked (private mode etc.) - fall back to English
    }
}

document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
        try {
            localStorage.setItem(STORAGE_KEY, btn.dataset.lang);
        } catch (e) {
            // not remembered, but the switch still works for this visit
        }
    });
});

const fromUrl = new URLSearchParams(location.search).get('lang');
applyLanguage(fromUrl === 'vi' || fromUrl === 'en' ? fromUrl : savedLanguage() === 'vi' ? 'vi' : 'en');
