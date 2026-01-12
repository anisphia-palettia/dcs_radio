import {Mail, MapPin, Phone, Instagram, Youtube} from "lucide-react";

export function FooterHomePage() {
    return (
        <footer className="relative overflow-hidden bg-background border-t mt-8">

            <div className="container mx-auto px-6 py-14">
                <div className="grid gap-10 md:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold">DCS FM Madiun</h3>
                        <p className="text-sm text-muted-foreground">Sahabat Setia Anda</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wide uppercase">
                            Alamat & Kontak
                        </h4>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-3">
                                <MapPin className="h-4 w-4 text-primary shrink-0"/>
                                <span>Jl Kelapa Manis No 38, Kota Madiun</span>
                            </li>

                            <li className="flex gap-3">
                                <Phone className="h-4 w-4 text-primary shrink-0"/>
                                <span>085 236 666 456</span>
                            </li>

                            <li className="flex gap-3">
                                <Mail className="h-4 w-4 text-primary shrink-0"/>
                                    <span>kantor@dcsfm.id</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wide uppercase">
                            Media Sosial
                        </h4>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-3 items-center">
                                <Instagram className="h-4 w-4 text-primary"/>
                                <span>radiodcs100.50</span>
                            </li>

                            <li className="flex gap-3 items-center">
                                <Youtube className="h-4 w-4 text-primary"/>
                                <span>DCSFMMadiun</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full overflow-hidden rounded-xl border">
                        <iframe
                            title="DCS FM Madiun"
                            src="https://www.google.com/maps?q=Radio%20DCS%20100.50%20FM&output=embed"
                            className="h-[220px] w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-12 border-t pt-6 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} DCS FM Madiun. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
