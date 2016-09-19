using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJSwithNET.Models
{
    public class ProductModel
    {
        public List<Product>findAll()
        {
        List<Product> result = new List<Product>();
        result.Add(new Product { Id = "p01", Name = "Product1", Price = 100, Quantity = 2 });
        result.Add(new Product { Id = "p02", Name = "Product2", Price = 300, Quantity = 3 });
        result.Add(new Product { Id = "p03", Name = "Product3", Price = 500, Quantity = 4 });


        return result;
        }
        public Product find(string id)
        {
            return findAll().Single(p => p.Id.Equals(id));
        }
    }
}