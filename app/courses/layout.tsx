import StudentTestimonials from "@/components/student-testimonials/student-testimonials";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <StudentTestimonials />
    </>
  );
}
