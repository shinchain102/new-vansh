"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function FriendshipProposal() {
  const [stage, setStage] = useState("intro")
  const [attempts, setAttempts] = useState(0)

  // Auto-advance from intro to question after 3 seconds
  useEffect(() => {
    if (stage === "intro") {
      const timer = setTimeout(() => {
        setStage("question")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [stage])

  const handleNoClick = () => {
    setStage("pleaseReconsider")
  }

  const handleYesClick = () => {
    setStage("friendshipProposal")
  }

  const handleNotNowClick = () => {
    setAttempts(attempts + 1)
    setStage(`retry${attempts}`)
  }

  const handleFriendshipClick = () => {
    setStage("success")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Hearts Background */}
      <HeartsBackground />

      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-md">
              <h1 className="text-3xl font-bold text-pink-600 mb-4">Hi there! 🌸✨</h1>
              <p className="text-lg text-pink-500 mb-2">I have something special to ask you... 💖</p>
              <div className="text-2xl my-4">🦋 🌈 🌷 💫 🌟</div>
            </div>
          </motion.div>
        )}

        {stage === "question" && (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-md">
              <h1 className="text-3xl font-bold text-pink-600 mb-6">Are you Vanshika? 🌸</h1>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleYesClick}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full text-lg"
                >
                  Yes 💕
                </Button>
                <Button
                  onClick={handleNoClick}
                  className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-2 rounded-full text-lg"
                >
                  No 🙈
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {stage === "pleaseReconsider" && (
          <motion.div
            key="pleaseReconsider"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-md">
              <h1 className="text-2xl font-bold text-pink-600 mb-4">Pleeease don't lie 🥺</h1>
              <p className="text-lg text-pink-500 mb-6">I know you're Vanshika 😢 💔</p>
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Button
                    onClick={handleYesClick}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full text-lg"
                  >
                    Yes, I'm Vanshika 💗
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {stage === "friendshipProposal" && (
          <motion.div
            key="friendshipProposal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-md">
              <h1 className="text-2xl font-bold text-pink-600 mb-4">Hi Vanshika! 🌸✨</h1>
              <p className="text-lg text-pink-500 mb-6">
                Let's be friends because your eyes made me feel like I should have a good friend with such pretty eyes
                just like you have. 👀✨
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleFriendshipClick}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full text-lg"
                >
                  Let's be friends! 🥰
                </Button>
                <Button
                  onClick={handleNotNowClick}
                  className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-2 rounded-full text-lg"
                >
                  Not now 🙈
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {stage === "retry0" && (
          <motion.div
            key="retry0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-md">
              <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 0.5, repeat: 3 }}>
                <h1 className="text-2xl font-bold text-pink-600 mb-4">Aww, please? 🥺👉👈</h1>
              </motion.div>
              <p className="text-lg text-pink-500 mb-4">
                I promise I'm a good friend! We could have so much fun together! 🌈✨
              </p>
              <div className="text-3xl mb-4">😢 💝 🙏</div>
              <div className="flex gap-4 justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(236, 72, 153, 0)",
                      "0 0 0 10px rgba(236, 72, 153, 0.3)",
                      "0 0 0 0 rgba(236, 72, 153, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Button
                    onClick={handleFriendshipClick}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full text-lg"
                  >
                    Okay, let's be friends! 💕
                  </Button>
                </motion.div>
                <Button
                  onClick={handleNotNowClick}
                  className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-2 rounded-full text-lg"
                >
                  Still thinking... 🤔
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {stage === "retry1" && (
          <motion.div
            key="retry1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-md">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
                <h1 className="text-2xl font-bold text-pink-600 mb-4">Pretty please with a cherry on top? 🍒🥹</h1>
              </motion.div>
              <p className="text-lg text-pink-500 mb-4">
                Friends make life so much more colorful and fun! Don't you want someone to share your thoughts with?
                🌷🦋✨
              </p>
              <div className="text-3xl mb-4">😢 👉👈 🥺 💔</div>
              <div className="flex gap-4 justify-center">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Button
                    onClick={handleFriendshipClick}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full text-lg"
                  >
                    Alright, friends it is! 🌟
                  </Button>
                </motion.div>
                <Button
                  onClick={handleNotNowClick}
                  className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-2 rounded-full text-lg"
                >
                  One more try... 🙊
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {stage === "retry2" && (
          <motion.div
            key="retry2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-md">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [-2, 2, -2],
                }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <h1 className="text-2xl font-bold text-pink-600 mb-4">I'm not giving up! 💖</h1>
              </motion.div>
              <p className="text-lg text-pink-500 mb-4">
                I'll be the best friend ever, I promise! We can share secrets, laugh together, and have the best time!
                🌈✨
              </p>
              <div className="text-3xl mb-4">🥺 💖 🙏 ✨ 🌸</div>
              <div className="flex gap-4 justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(236, 72, 153, 0)",
                      "0 0 0 15px rgba(236, 72, 153, 0.3)",
                      "0 0 0 0 rgba(236, 72, 153, 0)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Button
                    onClick={handleFriendshipClick}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full text-lg"
                  >
                    Fine, let's be friends! 💕
                  </Button>
                </motion.div>
                <Button
                  onClick={handleNotNowClick}
                  className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-2 rounded-full text-lg"
                >
                  Still not sure... 🤷‍♀️
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {stage === "retry3" && (
          <motion.div
            key="retry3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-md">
              <div className="relative">
                <motion.div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="text-6xl">😭</div>
                </motion.div>
              </div>
              <h1 className="text-2xl font-bold text-pink-600 mt-8 mb-4">I'm literally crying now! 😭</h1>
              <p className="text-lg text-pink-500 mb-4">
                All I want is to be your friend, Vanshika! Is that too much to ask? 💔 Please say yes! 🥺
              </p>
              <div className="text-3xl mb-4">💝 🙏 💖 🌈 ✨</div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(236, 72, 153, 0)",
                    "0 0 0 20px rgba(236, 72, 153, 0.4)",
                    "0 0 0 0 rgba(236, 72, 153, 0)",
                  ],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Button
                  onClick={handleFriendshipClick}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg w-full"
                >
                  Okay okay, let's be friends! 💕
                </Button>
              </motion.div>
              <div className="mt-4">
                <Button onClick={handleNotNowClick} variant="link" className="text-pink-400 text-sm">
                  I need more convincing... 🤔
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {stage === "retry4" && (
          <motion.div
            key="retry4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-md">
              <motion.div
                animate={{
                  rotate: [-10, 10, -10],
                }}
                transition={{ duration: 0.5, repeat: 5 }}
              >
                <h1 className="text-2xl font-bold text-pink-600 mb-4">This is my final plea! 🥺💕</h1>
              </motion.div>
              <p className="text-lg text-pink-500 mb-4">
                I've never wanted a friendship so badly! Please Vanshika, I promise to be the most loyal, fun, and
                caring friend you've ever had! 🌟✨
              </p>
              <div className="text-4xl mb-6 flex justify-center gap-2">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                >
                  💖
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                >
                  🙏
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                >
                  🥺
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                >
                  ✨
                </motion.div>
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(236, 72, 153, 0)",
                    "0 0 0 25px rgba(236, 72, 153, 0.5)",
                    "0 0 0 0 rgba(236, 72, 153, 0)",
                  ],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Button
                  onClick={handleFriendshipClick}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold w-full"
                >
                  Yes! Let's be friends! 💕✨
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {stage === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-md">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 1, repeat: 3 }}
              >
                <h1 className="text-3xl font-bold text-pink-600 mb-4">YAAAAY!!! 🎉✨💖</h1>
              </motion.div>
              <p className="text-lg text-pink-500 mb-6">
                I'm sooooo happy we're friends now, Vanshika! 💖 This is going to be the best friendship ever! I can't
                wait to share all the fun moments with you!
              </p>
              <div className="text-3xl mb-6 flex justify-center flex-wrap gap-2">
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [-10, 10, -10],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                >
                  🥰
                </motion.span>
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [10, -10, 10],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                >
                  💕
                </motion.span>
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [-10, 10, -10],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                >
                  🌈
                </motion.span>
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [10, -10, 10],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.9 }}
                >
                  🦋
                </motion.span>
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [-10, 10, -10],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.2 }}
                >
                  ✨
                </motion.span>
              </div>
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  boxShadow: [
                    "0 0 0 0 rgba(168, 85, 247, 0)",
                    "0 0 0 10px rgba(168, 85, 247, 0.3)",
                    "0 0 0 0 rgba(168, 85, 247, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <a
                  href="https://instagram.com/shinichi.x_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg hover:opacity-90 transition-opacity"
                >
                  <InstagramIcon />
                  Let's connect on Instagram
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Heart animation component
function HeartsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <FloatingHeart key={i} />
      ))}
    </div>
  )
}

function FloatingHeart() {
  const randomX = Math.random() * 100
  const randomDelay = Math.random() * 5
  const randomDuration = 5 + Math.random() * 10
  const randomSize = 20 + Math.random() * 30
  const randomRotation = Math.random() * 30 - 15

  return (
    <motion.div
      className="absolute text-pink-400"
      initial={{
        x: `${randomX}vw`,
        y: "100vh",
        opacity: 0.7,
        scale: Math.random() * 0.5 + 0.5,
        rotate: randomRotation,
      }}
      animate={{
        y: "-10vh",
        opacity: 0,
        rotate: randomRotation + 20,
        transition: {
          duration: randomDuration,
          delay: randomDelay,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        },
      }}
      style={{ fontSize: randomSize }}
    >
      <Heart fill="currentColor" />
    </motion.div>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}

