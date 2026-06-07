import { SignOutButton } from "@clerk/nextjs";

export default function SignOutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center p-8 border rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Keluar dari Akun</h1>
        <p className="mb-6 text-gray-500">Apakah Anda yakin ingin keluar?</p>
        <SignOutButton />
      </div>
    </div>
  );
}
