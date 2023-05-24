import { FunctionComponent } from "react"

const Footer: FunctionComponent = () => {
  return (
    <div className="relative h-[460.47px] lg:h-[317px] w-full text-center font-body-b1 text-base text-white">

        <div className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full bg-brown" />

          <div className=" flex flex-col items-center justify-center py-[52px]">
            <img
              className="relative h-[88.47px] w-[165px]"
              alt=""
              src="/lexend101.svg"
            />
            <div>
            <div className="py-[52px]">

                <div className="pb-[10px]">
                <b className="relative inline-block w-[282px] shrink-0 leading-[120%] text-left ">
                  Customer care

                </b>
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/Plus.svg"
                />
</div>
                <div className="hidden">
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Service and support
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  FAQ
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Contact us
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Find store
                </div>

              </div>
              <div className="pb-[10px]">
                <b className="relative inline-block w-[282px] shrink-0 leading-[120%] text-left ">

                  Our policies
                </b>
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/Plus.svg"
                />
</div>
                <div className="hidden">
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Return
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Privacy policies
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Cookie policies
                </div>
              </div>
              <div>
                <b className="relative inline-block w-[282px] shrink-0 leading-[120%] text-left">
                  Our company
                </b>
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/Plus.svg"
                />
                </div>
                <div className="hidden">
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  About us
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Career
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Becomes a sales partner
                </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[19px]">
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/mdifacebook.svg"
                />
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/mdiinstagram.svg"
                />
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/mditwitter.svg"
                />
              </div>
            </div>

      </div>
    </div>
  )
}

export default Footer
