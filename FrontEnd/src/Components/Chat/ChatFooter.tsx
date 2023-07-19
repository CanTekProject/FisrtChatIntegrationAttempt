import React, { SetStateAction } from "react";

import { styled } from "styled-components";
const ChatContainer = styled.form`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .bg-gray-50 {
    background-color: #f9fafb;
  }

  .dark\:bg-gray-900 {
    background-color: #1f2937;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .md\:h-screen {
    height: 100vh;
  }

  .lg\:py-0 {
    padding-top: 0;
    padding-bottom: 0;
  }

  .w-full {
    width: 100%;
  }

  .bg-white {
    background-color: #ffffff;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .shadow {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .dark\:border {
    border-color: #374151;
  }

  .md\:mt-0 {
    margin-top: 0;
  }

  .sm\:max-w-md {
    max-width: 28rem;
  }

  .xl\:p-0 {
    padding: 0;
  }

  .dark\:bg-gray-800 {
    background-color: #1f2937;
  }

  .dark\:border-gray-700 {
    border-color: #374151;
  }

  .p-6 {
    padding: 1.5rem;
  }

  .space-y-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .md\:space-y-6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .font-bold {
    font-weight: 700;
  }

  .leading-tight {
    line-height: 1.25;
  }

  .tracking-tight {
    letter-spacing: -0.025em;
  }

  .text-gray-900 {
    color: #1f2937;
  }

  .dark\:text-white {
    color: #ffffff;
  }
`;

type ChatFooterProps = {
  addMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
};

export default function ChatFooter({
  addMessage,
  text,
  setText,
}: ChatFooterProps) {
  return (
    <ChatContainer onSubmit={addMessage}>
      <div className="px-4 pt-4 mb-2 border-t-2 border-gray-200 sm:mb-0">
        <div className="relative flex">
          <input
            type="text"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            placeholder="Write your message!"
            className="w-full py-3 pl-12 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md focus:outline-none focus:placeholder-gray-400"
          />
          <div className="absolute inset-y-0 right-0 items-center hidden sm:flex">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-3 text-white transition duration-500 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none"
            >
              <span className="font-bold">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 ml-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </ChatContainer>
  );
}
