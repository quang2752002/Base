using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Enums
{
    public enum State
    {      
        Pending,      // Đang chờ xử lý
        Processing,   // Đang xử lý
        Shipped,      // Đã giao hàng
        Completed,    // Hoàn thành
        Cancelled,    // Đã hủy    
        Confirmed,    // Đã xác nhận     
    }
}
