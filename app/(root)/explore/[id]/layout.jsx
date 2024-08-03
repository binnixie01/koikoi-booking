import { place } from "@/components/place";

export async function generateMetadata({ params }) {
  const foundPlace = place.find((item) => item.id === params.id);
  return {
    title: foundPlace.title,
  }
}

export default function RootLayout({
  children,
}) {
  return (
    <>{children}</>
  )
};