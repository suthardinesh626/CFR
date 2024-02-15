export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "1st",
      description: "Engineering Design Rank (FI 2023)",
    },
    {
      quantity: "3rd",
      description: "Innovation Rank (FI 2023)",
    },
    {
      quantity: "4th",
      description: "Overall Rank (FI 2023)",
    },
    {
      quantity: "4th",
      description: "Business Plan Rank (FB 2023)",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-md text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
