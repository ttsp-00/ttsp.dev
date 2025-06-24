import Image from 'next/image'

export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='w-full max-w-7xl px-8 py-4 mx-auto'>
			{children}
		</div>
	)
}

export const Hero = () => {
	return (
		<div className="">
			<div className="max-w-4xl">
				<h1 className='text-5xl font-bold mb-8'>Тестируем сайты, приложения, ботов, игры более 10 лет.</h1>
			</div>
		</div>
	)
}

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-[rgba(247, 246, 246, 1)] text-[#221d1d]">
			<header>
				<Container>
					<h2 className='text-2xl font-bold'>TTSP</h2>
				</Container>
			</header>
			<main className="pt-32">
				<Container>
					<Hero />
				</Container>
			</main>
		</div>
	)
}
