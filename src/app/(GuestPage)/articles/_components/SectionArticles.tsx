import {TypographyH1, TypographyLead} from "@/components/typography";
import {ArticleCard} from "@/components/ArticleCard";
import {BackNavigationRoute} from "@/app/(GuestPage)/_components/BackNavigationRoute";

export  function  SectionArticles() {
    return (
        <section className="container mx-auto p-4 space-y-8 md:p-8">
            <div className="space-y-3 max-w-2xl">
                <BackNavigationRoute to={"Beranda"} url={"/"} />
                <TypographyH1>Artikel</TypographyH1>
                <TypographyLead>
                    Berita terbaru, program radio, dan informasi menarik dari DCS FM
                </TypographyLead>
            </div>

            <div className="border"></div>

            <div className="space-y-4">
                <ArticleCard/>
                <ArticleCard/>
            </div>
        </section>
    )
}