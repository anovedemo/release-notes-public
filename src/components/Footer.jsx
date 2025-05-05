export default function Footer() {
  return (
        <div className="flex justify-center w-full">
            <div className="w-4/5 lg:w-2/3 pb-20 flex flex-col">
                <div className="divider"></div>
                <div className="flex flex-col md:flex-row mt-12">
                    <div className="w-1/2 lg:w-2/5 self-center">
                    <div className="flex flex-col lg:flex-row max-w-[230px]">
                    <img src='/public/Primary Logo on Light BG.svg' className="mx-auto h-20 w-auto mb-10"></img>
                    </div>
                    </div>
                    <div className="lg:w-1/5 flex flex-col gap-2 py-5">
                        <h2 className="text-xl font-medium mb-2">SERVICES</h2>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="https://anove.ai/#pricing">Pricing</a>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="https://anove.ai/resources/whitepapers">Whitepapers</a>
                        <a className="text-sm hover:text-midblue cursor-pointer"href="/">Documentation</a>
                        {/* <a className="text-sm hover:text-midblue cursor-pointer" href="https://uptime.anove.ai/status/application">Service Availability</a> */}
                        <a className="text-sm hover:text-midblue cursor-pointer" href="https://github.com/orgs/anovedemo/projects/1">Roadmap Product</a>
                    </div>
                    <div className="lg:w-1/5 flex flex-col gap-2 py-5">
                        <h2 className="text-xl font-medium mb-2">ABOUT US</h2>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="https://anove.ai/team">Our team</a>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="https://anove.ai/vacancies">Careers</a>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="https://anove.ai/contact">Contact</a>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="https://anove.ai/subprocessors">Our subprocessors</a>
                    </div>
                    <div className="lg:w-1/5 flex flex-col gap-2 py-5">
                        <h2 className="text-xl font-medium mb-2">TERMS</h2>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="https://anove.ai/privacy-policy">Privacy Policy</a>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="https://anove.ai/terms-and-conditions">Terms & Conditions</a>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="mailto:disclosure@anove.agency">Responsible Disclosure</a>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="mailto:info@anove.agency">Partner Agreement</a>
                        <a className="text-sm hover:text-midblue cursor-pointer" href="https://cms.anove.ai/assets/a6c04870-3886-46bf-9a1b-21ce10937958">License Agreement</a>
                    </div>
                </div>
                { /*<h2 className='text-2xl font-medium hidden lg:flex'>Subscribe For Our Newsletters</h2>
                <div>
                    <div className="relative mt-2 rounded-md shadow-sm max-w-[400px] lg:flex gap-10 hidden">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <button className='text-3xl ring-2 ring-gray-300 rounded-md px-2 h-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm xl:text-xl hover:bg-gray-100'>{'>'}</button>
                    </div>
                </div> */}

                <p className='text-sm text-gray-700 text-center pt-5 lg:pt-0 lg:text-right'>Copyright © 2025 Anove International B.V.</p>
            </div>
        </div>
    )
}
