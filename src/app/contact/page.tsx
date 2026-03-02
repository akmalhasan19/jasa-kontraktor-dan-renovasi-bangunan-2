import { TheContactSection } from "@/components/sections/TheContactSection";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with ArsitekPro to start your journey.",
};

export default function ContactPage() {
    return (
        <div className="pt-[72px] min-h-screen bg-white">
            <TheContactSection />
        </div>
    );
}
