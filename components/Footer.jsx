"use client"

import "./Footer.css"
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="px-4 py-5">
        <div className="footer-top">
            <div className="footer-top-about">
                <h1 className="font-semibold">About</h1>
                <Link href='/' className="flex cnt">
                    <p className="text-base tracking-tighter">GDG Challenge</p>
                </Link>
                <Link href='/' className="flex cnt">
                    <p className="text-base tracking-tighter">Services</p>
                </Link>
                <Link href='/' className="flex cnt">
                    <p className="text-base tracking-tighter">Partners</p>
                </Link>
            </div>
            <div className="footer-top-followus">
                <h1 className="font-semibold">Follow Us</h1>
                <Link href='/' className="flex cnt">
                    <p className="text-base tracking-tighter">GitHub</p>
                </Link>
            </div>
            <div className="footer-top-legal">
                <h1 className="font-semibold">Legal</h1>
                <Link href='/' className="flex cnt">
                    <p className="text-base tracking-tighter">Privacy Policy</p>
                </Link>
                <Link href='/' className="flex cnt">
                    <p className="text-base tracking-tighter">Terms & Conditions</p>
                </Link>
            </div>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="footer-mid">
            <span>Our Collaboration Partners</span>
            <div>
                <Link href='https://usc.edu.ph/'>
                    <Image
                        src="/assets/images/universitylogo.png"
                        width={120}
                        height={50}
                        alt="partnerlogo1"
                    />
                </Link>
                <Link href='https://usc.edu.ph/'>
                    <Image
                        src="/assets/images/departmentlogo.png"
                        width={40}
                        height={40}
                        alt="partnerlogo2"
                    />
                </Link>
            </div>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="footer-bottom">
            <span className="cnt">Copyright © 2025 GDG Challenge. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer