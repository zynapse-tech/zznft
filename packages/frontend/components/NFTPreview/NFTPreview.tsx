import {jsonify} from "../../helpers/strings";
import {css} from "../../helpers/css";
import {useRouter} from "next/router";
import {nfts} from "@prisma/client";
import {Metadata} from "../../pages/nft/[id]";
import {DevToggle} from "../../environment/Dev";

interface NFTPreviewProps {
  nft: nfts;
  showDetails?: boolean;
}

const NFTPreview = ({nft, showDetails = false}: NFTPreviewProps) => {
  const router = useRouter()
  const metadata = nft.metadata as Metadata

  return <div>
    <div
      style={{minWidth: "300px", minHeight: "300px"}}
      onClick={() => router.push(`/nft/${nft.token_id}`)}
      className={css("break-all", "bg-neutral-800", "p-3", "text-sm", "hover:cursor-pointer", "hover:bg-neutral-900", "w-full", "h-full", "flex", "items-center", "justify-center")}>
      <img src={metadata.image}/>
    </div>
    {showDetails && <div className={css("flex", "justify-between", "mt-3")}>
      <div>{metadata.name}</div>
      <div>{nft.token_id}</div>
    </div>}
    {/*<DevToggle>{jsonfiy(nft)}</DevToggle>*/}
  </div>
}

export default NFTPreview