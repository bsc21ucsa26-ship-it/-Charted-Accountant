'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ id: string; text: string; sender: 'user' | 'bot' }>>([
    {
      id: '1',
      text: 'Hello! Welcome to G.K. Vaid & Associates. How can we help you with your accounting or tax needs?',
      sender: 'bot',
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (inputValue.trim()) {
      const userMessage = {
        id: Date.now().toString(),
        text: inputValue,
        sender: 'user' as const,
      }
      setMessages([...messages, userMessage])
      setInputValue('')

      setTimeout(() => {
        const botMessage = {
          id: (Date.now() + 1).toString(),
          text: 'Thank you for your inquiry. Our team will get back to you shortly. You can also reach us at +91 004 4501 2155 or email us for immediate assistance.',
          sender: 'bot' as const,
        }
        setMessages((prev) => [...prev, botMessage])
      }, 500)
    }
  }

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-2xl flex flex-col z-50 border-2 border-primary">
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold text-lg">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 h-80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-muted text-foreground rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-3 flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="text-sm"
            />
            <Button
              onClick={handleSend}
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-secondary text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow z-50 flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </>
  )
}
