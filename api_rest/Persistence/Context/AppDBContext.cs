using api_rest.Domain.Models;
using api_rest.Domain.Helpers;
using Microsoft.EntityFrameworkCore;

namespace api_rest.Persistence.Context
{
    public class AppDbContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Category>().ToTable("Categories");
            builder.Entity<Category>().HasKey(p => p.Id);
            builder.Entity<Category>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Category>().Property(p => p.Name).IsRequired().HasMaxLength(30);
            builder.Entity<Category>().HasMany(p => p.Products).WithOne(p => p.Category).HasForeignKey(p => p.CategoryId);

            builder.Entity<Category>().HasData
            (
                new Category { Id = 100, Name = "Livros" }
            );

            builder.Entity<Product>().ToTable("Products");
            builder.Entity<Product>().HasKey(p => p.Id);
            builder.Entity<Product>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Product>().Property(p => p.Name).IsRequired().HasMaxLength(50);
            builder.Entity<Product>().Property(p => p.QuantityInPackage).IsRequired();
            builder.Entity<Product>().Property(p => p.UnitOfComic).IsRequired();

            builder.Entity<Product>().HasData
            (
                new Product
                {
                    Id = 100,
                    Name = "20th Century Boys",
                    QuantityInPackage = 4,
                    UnitOfComic = EUnitOfComic.manga,
                    CategoryId = 100,
                },
               
                new Product
                {
                    Id = 101,
                    Name = "World War Hulk",
                    QuantityInPackage = 5,
                    UnitOfComic = EUnitOfComic.superhero,
                    CategoryId = 101,
                }
            );

            builder.Entity<User>().ToTable("Users");
            builder.Entity<User>().HasKey(p => p.Id);
            builder.Entity<User>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<User>().Property(p => p.Login).IsRequired().HasMaxLength(50);
            builder.Entity<User>().Property(p => p.Password).IsRequired().HasMaxLength(10);
            
            builder.Entity<User>().HasData
            (
                new User
                {
                    Id = 100,
                    Login = "Igor",
                    Password = "Hyegor666",
                }
            );
        }
    }
}
