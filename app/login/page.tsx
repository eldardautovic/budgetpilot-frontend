import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {DollarSign} from "lucide-react"

export default function Login() {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
            <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                    <div
                        className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                        <DollarSign className="w-8 h-8 text-[#05377f] dark:text-blue-400"/>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Budget Pilot</h1>
                </div>
                <Card
                    className="shadow-lg dark:shadow-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-md">
                    <CardContent className="space-y-4 pt-6">
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Welcome Back</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Sign in to your budget tracker
                                account</p>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                Username
                            </Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="h-11 bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="h-11 bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button
                            className="w-full h-11 cursor-pointer bg-[#05377f] hover:bg-[#04285a] dark:bg-[#05377f] dark:hover:bg-[#0648a3] text-white font-medium">
                            Sign In
                        </Button>
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-[#05377f] dark:text-blue-400 hover:text-[#04285a] dark:hover:text-blue-300 hover:underline text-sm"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
