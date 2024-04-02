import Image from "next/image";

import InstagramForm from "@/components/instagram/InstagramForm";

import { cn } from "@/utils";

const FEATURES_LIST = [
  {
    title: "Fast and Reliable",
    text: "Our reliable service ensures you get your videos without interruptions.",
  },
  {
    title: "High-Quality Downloads",
    text: "Download Instagram videos in the highest available quality.",
  },
  {
    title: "User-Friendly Interface",
    text: "No technical expertise required—just a few simple clicks.",
  },
  {
    title: "No Registration Required",
    text: "No need to create an account or log in.",
  },
  {
    title: "Unlimited Downloads",
    text: "Download as many Instagram videos as you want, with no restrictions.",
  },
  {
    title: "Supports Multiple Platforms",
    text: "Compatible with various devices and platforms, including Windows, macOS, Android, and iOS.",
  },
];

const BENEFITS_LIST = [
  "Download Instagram videos to back up your content.",
  "Download Instagram videos to preserve your memories",
  "Create your own video compilations using Instagram videos that you download.",
  "Download Instagram videos for research purposes, such as studying a particular trend or social phenomenon.",
  "Save your favorite Instagram videos to your device so you can watch them offline or share them with others.",
  "Use Instagram videos for your own creative projects, such as making YouTube videos or creating presentations.",
  "Download Instagram videos for educational purposes, such as learning about a new skill or watching a historical event.",
];

const FAQ_LIST = [
  {
    question: "Is this website free?",
    answer:
      "Yes, this website is free. We do not collect any personal information from our users.",
  },
  {
    question: "Can I download Instagram stories?",
    answer: "No, downloading Instagram stories is not supported.",
  },
  {
    question: "Can I download images from Instagram?",
    answer: "No, we only provide the service of downloading Instagram videos.",
  },
  {
    question: "Is this website secure?",
    answer:
      "Yes, this website is secure. We do not collect any personal information from our users.",
  },
  {
    question: "Can I use the website from my mobile?",
    answer: "Yes, you can use the website from your mobile or tablet.",
  },
  {
    question: "What if the video I want to download is not available?",
    answer:
      "If the video you want to download is not available, please try again later.",
  },
  {
    question: "Can I download Instagram videos from private accounts?",
    answer: "No, you cannot download Instagram videos from private accounts.",
  },
  {
    question: "What is the best format to download Instagram videos in?",
    answer:
      "The best format to download Instagram videos in is MP4. MP4 is a widely supported video format that can be played on most devices.",
  },
];

export default function HomePage() {
  return (
    <main id="main" className="flex w-full flex-1 flex-col">
      <section
        id="#download"
        className={cn(
          "flex w-full flex-col items-center px-4 py-24 shadow-sm",
          "bg-gradient-to-r from-blue-600 to-purple-600"
        )}
      >
        <h1
          className={cn(
            "py-2 text-center text-2xl font-extrabold text-white sm:text-4xl"
          )}
        >
          Instagram Video Downloader
        </h1>
        <InstagramForm />
        <p className="my-4 text-center text-xs text-white md:text-sm">
          If the download opens a new page, just right click the video and then
          click `Save as video`
        </p>
      </section>

     
        <hr className="w-full" />

        <section id="benefits">
          <h2 className={cn("py-2 text-xl font-semibold sm:text-2xl")}>
            Benefits of using our Downloader
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {BENEFITS_LIST.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <hr className="w-full" />

        <section id="faq">
          <h2 className={cn("py-2 text-xl font-semibold sm:text-2xl")}>
            Frequently Asked Questions - FAQ
          </h2>
          <ul className="list-disc pl-6">
            {FAQ_LIST.map(({ question, answer }, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold">{question}</p>
                <p>{answer}</p>
              </li>
            ))}
          </ul>
        </section>
        <hr className="w-full" />
      </div>
    </main>
  );
}
