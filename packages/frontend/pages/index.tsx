import Head from 'next/head'
import {observer} from "mobx-react";
import TextField from "../components/TextField/TextField";
import {useState} from "react";
import {css} from "../helpers/css";
import {GetServerSideProps} from "next";
import NFTPreview from "../components/NFTPreview/NFTPreview";
import {siteTitle} from "../constants";
import {NFT} from "../interfaces";
import {Http} from "../services";

interface HomeProps {
  feed: NFT[]
}

const Home = observer(({feed}: HomeProps) => {
  const [inputValue, setInputValue] = useState<string | undefined>()
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={css("flex", "justify-center")}>
          <div className={css("w-full")} style={{maxWidth: "500px"}}>
            <TextField block placeholder={"Search..."} value={inputValue} onChange={(value) => setInputValue(value)}/>
            <div className={css("mt-8", "flex", "flex-col", "gap-8")}>
              {feed.map(nft => <NFTPreview key={nft.id} nft={nft} showDetails/>)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
})

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  let feed: NFT[] = []
  try {
    feed = await Http.get("/nft")
  } catch (e) {
    // console.error(e)
  }

  return {
    props: {feed}
  }
}

export default Home
