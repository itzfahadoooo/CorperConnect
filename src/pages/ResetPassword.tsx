"use client"

import type React from "react"

import { useState } from "react"
import { resetPassword } from "@/firebase/auth"
import { Link } from "react-router-dom"
import logo from "@/assets/logo.png"

const ResetPassword = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)
    setLoading(true)

    try {
      await resetPassword(email)
      setSuccess(true)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "Failed to reset password")
      } else {
        setError("Failed to reset password")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <div className="relative h-12 w-20">
            <img src={logo || "/placeholder.svg"} alt="Logo" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Reset your password</h2>
          <p className="mt-2 text-center text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        {success && (
          <div className="rounded-md bg-green-50 p-4">
            <div className="text-sm text-green-700">Password reset link sent! Check your email.</div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
