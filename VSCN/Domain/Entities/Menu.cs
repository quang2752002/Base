using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Menu:BaseEntity
    {
        public string? ParentId { get; set; }
        public string? Name { get; set; }
        public string? Slug { get; set; }
        public string? Link { get; set; }
        public string? State { get; set; }
        public virtual Menu? Parent { get; set; }
        public virtual ICollection<Menu>? Menus { get; set; }
    }
}
