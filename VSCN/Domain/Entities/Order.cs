using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Domain.Entities
{
    // Dùng Enum để quản lý trạng thái đơn hàng một cách an toàn và rõ ràng
    

    public class Order : BaseEntity
    {
        public string? Name { get; set; }
        public string? Phone { get; set; }
        public string? Note { get; set; }
        public string? Address { get; set; }
        public double? Price { get; set; }
        public double? Acreage { get; set; }
        public string? State { get; set; }
        public string? ArticleId { get; set; }     
        public string? UserId { get; set;}
        [JsonIgnore]
        public virtual Article? Article { get; set; }
        [JsonIgnore]
        public virtual User? User { get; set; }
    }
}