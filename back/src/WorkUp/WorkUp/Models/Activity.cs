namespace WorkUp.Models
{
    public class Activity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Priority { get; set; }

        public Activity() { }

        public Activity(int id, string title, string description, string priority)
        {
            Id = id;
            Title = title;  
            Description = description;
            Priority = priority;
        }
    }
}
