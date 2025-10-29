## Dự án Website Bán Hàng Online (E-commerce)

Đây là một dự án website thương mại điện tử đầy đủ chức năng, được xây dựng với mục tiêu tạo ra một nền tảng bán hàng online đơn giản, nhanh gọn và dễ sử dụng. Dự án bao gồm từ việc thiết kế cơ sở dữ liệu, phát triển backend API, xây dựng giao diện người dùng (frontend) cho đến triển khai lên môi trường internet.

# 1. Giới thiệu

Dự án mô phỏng một trang web bán hàng trực tuyến với các danh mục sản phẩm đa dạng như quần áo, đồ điện tử, mỹ phẩm, v.v. Trang web cung cấp các chức năng cốt lõi cho cả người dùng (khách hàng) và quản trị viên (admin), nhằm mang lại trải nghiệm mua sắm hoàn chỉnh.

# 2. Công nghệ sử dụng

Dự án được xây dựng dựa trên các công nghệ web hiện đại và phổ biến:

Frontend:

Framework: React (khởi tạo với Vite để có hiệu năng tối ưu)

Styling: Tailwind CSS / Bootstrap

Routing: React Router

HTTP Client: Axios để gọi API

Backend:

Framework: Node.js & Express.js

Database Driver: mysql2/promise

Database:

MySQL

Triển khai (Deployment):

Frontend: Vercel

Backend: Render

Database: PlanetScale / Railway

# 3. Tính năng chính

Chức năng dành cho Người dùng

Trang chủ: Hiển thị các sản phẩm nổi bật, sản phẩm mới và chương trình khuyến mãi.

Tìm kiếm & Lọc: Tìm kiếm sản phẩm theo tên và lọc sản phẩm theo danh mục, khoảng giá.

Chi tiết sản phẩm: Xem thông tin chi tiết, nhiều hình ảnh, mô tả, giá và các đánh giá từ người dùng khác.

Giỏ hàng: Thêm, xóa, cập nhật số lượng sản phẩm một cách linh hoạt.

Thanh toán: Điền thông tin giao hàng, chọn phương thức thanh toán và tiến hành đặt hàng.

Tài khoản: Đăng ký, đăng nhập để quản lý thông tin cá nhân và theo dõi đơn hàng.

Lịch sử mua hàng: Xem lại tất cả các đơn hàng đã đặt và trạng thái của chúng.

Đánh giá sản phẩm: Để lại bình luận và xếp hạng sao cho các sản phẩm đã mua.

Chatbox: Hỗ trợ, tư vấn trực tuyến với nhân viên chăm sóc khách hàng.

Chức năng dành cho Quản trị viên (Admin)

Dashboard: Giao diện tổng quan về hoạt động kinh doanh.

Quản lý sản phẩm: Thêm, sửa, xóa sản phẩm và quản lý số lượng tồn kho.

Quản lý đơn hàng: Xem danh sách tất cả đơn hàng, cập nhật trạng thái (ví dụ: đang xử lý, đã giao, đã hủy).

Quản lý người dùng: Xem danh sách người dùng, thực hiện các thao tác như khóa/mở khóa tài khoản.

Thống kê & Báo cáo: Xem báo cáo doanh thu theo ngày/tháng, thống kê các sản phẩm bán chạy nhất.

# 4. Cấu trúc thư mục

Dự án được tổ chức theo cấu trúc monorepo đơn giản:

Project_A/
├── fe/         # Source code cho Frontend (React)
├── be/         # Source code cho Backend (Express)
└── README.md       # File hướng dẫn này


# 5. Hướng dẫn cài đặt và chạy dự án

Yêu cầu hệ thống

Node.js (phiên bản 16.x trở lên)

npm (hoặc yarn)

Hệ quản trị CSDL MySQL đã được cài đặt và đang chạy.

Cài đặt Backend (/server)

Di chuyển vào thư mục server:

cd server


Cài đặt các gói phụ thuộc:

npm install


Tạo file .env trong thư mục server và cấu hình thông tin kết nối database:

DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=shopdb
PORT=5000


Khởi chạy server backend:

npm start


API sẽ được phục vụ tại địa chỉ http://localhost:5000.

Cài đặt Frontend (/client)

Mở một cửa sổ dòng lệnh (terminal) khác, di chuyển vào thư mục client:

cd client


Cài đặt các gói phụ thuộc:

npm install


Tạo file .env.local trong thư mục client và trỏ đến địa chỉ API của backend:

VITE_API_URL=http://localhost:5000


Khởi chạy ứng dụng frontend:

npm run dev


Trang web sẽ có thể truy cập tại http://localhost:5173.

# 6. Thiết kế Cơ sở dữ liệu (Sơ lược)

Users: Lưu thông tin người dùng (id, username, password_hash, email, full_name, role).

# 7. Demo Online

Link Frontend: .....

Link Backend API: .....