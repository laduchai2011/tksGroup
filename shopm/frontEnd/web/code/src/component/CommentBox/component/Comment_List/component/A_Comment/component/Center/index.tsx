import { useRef } from 'react';
import style from './style.module.scss';
import LazyImage from '@src/component/LazyImage';
import { BsReply } from 'react-icons/bs';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { RiShareForwardFill } from 'react-icons/ri';
import { LIKE, DIS_LIKE, REPLY, SHARE, COMMENT_BEFORE } from '@src/const/text';
import avatarnull from '../../../../../../../../asset/avatar/avatarnull.png';
import CommentInput from '@src/component/CommentInput';

const Center = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    const ctn =
        'Giải thích từ ngữ Trong Luật này, các từ ngữ dưới đây được hiểu như sau: 1. Dược là thuốc và nguyên liệu làm thuốc. 2. Thuốc là chế phẩm có chứa dược chất hoặc dược liệu dùng cho người nhằm mục đích phòng bệnh, chẩn đoán bệnh, chữa bệnh, điều trị bệnh, giảm nhẹ bệnh, điều chỉnh chức năng sinh lý cơ thể người bao gồm thuốc hóa dược, thuốc dược liệu, thuốc cổ truyền, vắc xin và sinh phẩm.';

    const img: string =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEA8QERAQFRASDxEPDxAPDxAPDxAQFRYWFhUVFRUYHSggGBolGxUWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHSUtLystLS0tLSsrKy0tLS0tKy0tKy0tLS0tLTctKy0tKy0tLS0tKysrLSstLSstLSstLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABAEAACAQIDBQYDBgUDAgcAAAABAgADEQQSIQUxQVFhBhMicYGRMqGxBxRCUsHRI2JygvGiwvBTkhUkM1Rjo7L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAIBBAIDAQEAAAAAAAAAAQIRAwQSITFBURMiMnGx/9oADAMBAAIRAxEAPwD0+OI9pICbMTRjCARFYBXYSvUWXGSCZI5U2KTU4gkslIgkrZaV8kgyS3kkSkNjSqEkssOFkssNlpQqLKzJNOokrNTlSlYp5IRKcL3cmtOPZaCyQ9EQlLDsxsouZoUtlMLZiBc7hqRH3yTyUwt9MPtBtxMHR7wjNUY5KNP879f5RxmT9njVNoYkYyrTXLhWcHEAEDEVyCq06YvpTpgknmxFjYWmP2qQYvav3a57mkDTOUkEKATUN+BJDC/C45T1rs9s9MPhqNFFCqqiyqLAX10k817ZJPbXix3baxPtBwYZMHWI1oYym1+lQNR+tQH0mKKpVrqbMN19xHIjiJ03bymx2di8nxrRd0/rUZl+YE4zCYta9KnWQ6OgceovaX02ssLjS59zKWN2hikqXG5wPEhOo6jmOv8AiUtpUrgzMxCBwASysNUdSVdDzU/8B4zntqdrMVg27vEIKtM6LXTRrfzpz8vYTj6jpcsPOPmf8dvT9Tjn4y8VbxqG9hOW21jVpXUWNU7l3hP5m/bjNfb21+6pKfF39UXCkFTTU8SN4PznCOxJPU3J4k+cODpLlrLP19H1HWTHeOHm/bR7K4P7xjcNSOq9931Uk7xT8ZJ53YAf3T2euupnBfY5sc1K2Jxe9UX7un9RKs/yyj3nomJp2JnRy3eTl45qPIftK7JJRUYyiuVWqZayqPCGb4XA4aix8xC0BXwCYTbGzbqlSipxuGuWpBtM4te5pEgmx1TgbbvSu0eyPvOAxVEC5ei2S/8A1F8Sf6gJzmwMHUp4WjRCjKFBcMVBF94IJky6VXoPZPtRQ2hh1xFE2Pw1aTEZ6NTirfoeIm6rT582rhq+ysUMbgSy0XbK9MH+GDvNNhxQ71PA6cr+udne2NDE4enW8QuPEAAcrcQRfQg3EMsdeYl1yGFEp4LGU6gujA8xuYeYOsuCZVcKKPGkmxQJILEokwJozILFlkwI9ojBKwbLLWQyDUzyhstKpWRyywUkSJWy0DaRIhisYrDYBCyWWTCxysNkrVEld0l11gkoszBVFyY5RoPDYN6hIUbtSToBNHDbJtq5v/KLgepl/AYTulte5Jux4ekO+/5yLnfhcwnypVCFZEAAF72AtCY2sFV2P4KbVPRQT+kDtHSrRPAm0zO1NUjDYpuVEr/3WX9Y8J3WRWV1HnvZGmam1K5OpKKCerMCf1ns6bp472HrZNo4pgAT3FF1vu/Ff6z03BYyo9twvyE16mbzrPhv6Rd2jSz0nXmtp47sSlUwmIxWAqqVWnWqNhr/AAvhmZu7KndoNLcLT2ZU5kzmu22wu/omtTW+Jog1MOw0LHe1M9GAt52PCRw59mSuTHuxctjaqU0eq5siKXduSgXP+JlYiihpnFMqtUsbMwzd2OCJfd1PE68gOf7bbVbF4VaOGN1ZBXxLE5SlK/gRgeJcXt/J1l3DV77Ios3FFN+uUaz0+Oy5acOc1i5La2PNapqNRoCBYafh6dPbiLZOJZiVpU1Jd2VEVdWZmNgB1JMhtbElWSmgGbMKz9TvA8p6R9j3ZgYjF1Me6/waBy4a+5qzLqf7FNvNukw5uWftprxcfp6R2K2CmAwVHDllDd2TUZiBnrMbuRfqT6CXWwLG+gPIiP2po/w6d+D3+U4rbWyXqYdkpValN2Pham7IVPO4M4cfLrrucNhCoKsDqOWk5LB9nFQvlAuGI1vuuZzPZTZOOwzhsRjqrVXuDQOJqulOmGHjF21vdd4BAJ6z0KiTew1Jjgcp2m2R/wCXYlSQ96TKLkm+gIHO9rdROU+yfvPvONwzqwyURWKmxCvmRd401DDdynq21NnB6eVyddQRvBG6ZXZ2gtPvmYE1lqCi1RgSzUu9dkUsd9r7uF4+7xotfKYpvfMrFSBvUkN7iQbHVEUk1qxY6IO9qHzY67h9fKau1EFMVDwO6c2rHfxiN1ez+0jd0mamztaxcA+Kx3xpiUcUcovUf0Y2ii1A64CTAjKJMCJKSiFVZFYVZJnCxZZIR4GE1MQL0hLREgwhCqm1KDanLZEGwlJVcsREKRIGMgXEtbHTxO3IAe/+JXaamz6dkHM+L33fKLK+DxnlYbdBsdFbkdYS8G62PRvkZDVW2vTvTBG9SGE5/tbUts7EN+YKPmD+k6iqmZCvMEDznB9vsVbAGnxKtUPpnUD5GbcE3nP9Z8n81ynYp74+/wD1Nn0j9P3nqmxxoOk8b7GYjLisA35tn0VPsJ7Rs8WmnU/0ni/lpVdxg8Pqtj5QrGQprby4TlbPBftC2aNnYnGhUvSxwFegFG+sTlqUx/cQ398z9pVKlPZ+Fw1lsFCMQ+pdTlYWtuzKRe89l+0Xs/8Ae8ISig4jDOuKw3M1aeuX+4XHqOU8U2r/AOhgL72w6VP+8s/+4T0+ky7p/ji6iarjEw9Wvi6aol3xFQUqSg3u5IUKTzBt7z6v7K7Cp4LCUMKliKaeNvz1Dq7+rEmeQ/Yd2f7zF4rFut6eGqHur7jiHUi46qjNf+peU9xaqFBJnHzeMrHTx+ts3tEAUVfxZrjy4zBWnqBymviGLEufQchM+gpLesnGaVQ9pbHWqgcaVqanu2Gl+h423jT8x5weya9yG3AjLY71I0IPW82GWwt0mZs+j/GrUuDBa6ed8rAewPrEGrtBbimJzjvkxNekdFOKpN/9VNv1PtOpCXydJgbeoKcan/yUl9KiXA9Srf6IQI9oquZqdNd58RtM9sHYfWXsFSZqju28+FeiLp8zc+sPjbAchxP7c4yYJQxSwcWo0FMEcyTcxoB26iTAjKJMCQSSwiwYkhEYojwYMfNA0zINGzRi0ZWmMG0mTIExptDYQbQpkDGQYS5A5kCbAlDBpd78hf8ASX5GS8Eai8RvEE9QEdb2t1hiYDE0AfEBqPS8UWnfj1B95xfavYz4qrUw4YIKlkDsLqgKk3tx1J9TOspVcyPzUf4/50nkeJ2vU2ntLaKVGNPAYZzhUKmqrCoGZTUOTeSUY3bRRl03mXhlcbuIym5oJuz4w1WgRiFZsOiYcKabUzW7tkRmW55EG2unGer7KqZkU9J5u+xKtPFDB0WUrcVaZr5q5pGoqK3jvfXLxPACei7IpGmvdMQWXeQLef8AzqJWeVy9ljNempXOgkqJuIPE/DGwjeGZ/C1ieFfabs00caKYB7tl72jYfhYm6Dya+nAFZ7qNRMHbuwKWJq4StUsPutbvdR8a2Pg8s4pt/b1m3T8v48t30z5uPvx0H2N2MMDgaNE2D2NauedZ/E1+dtF8lEtV65c3/CNw59TB4zEl2A/Dy59TEOkj3d1U8TRVFurHgBJbOwwClzD16dqYHEkR8YclMKN50i2atTGa5lSrTKVcPWA0Wo1Op0puN/oV+c5/txsbG4rDomDexDMXUV2w7HdlYMNDYg6H80vdjdl7Ro4V0xVUs2cBRWqfeSECgAq+YHeDv1vHQ3qFWxe/AmcvtTE5qjPfxCvSCeg8XyZh6iXsU2MUMq0qbLwd3AYdAik3HqJjYDA4qq6N3aEip3meo600sb7qa5mHkTz110INL/aTtFh9nYVa1bMWchadJLZ3OvE6KLAm55aXMzdg7XG0aK4lQy0yzJkewKsp1Gm/zm/tTspSxNNkxjvVDFSyA92llOYLpra/Ij0lM7PSiopUKa06SCy00GVRxPzJN4TySs1FAd49opPuzyilB2oEkIgJICZghHEVo4EQIR44EVoBGMZK0YiMkSJBhCESDCPaQiIxEmRIkRhZwK6Metvb/MsmDw62Ue8LeZ321npDMJEjkY1drAm0onEnjf2McgKu+WpfccvjHBgTo3mLTk27BFcZisTg8W1D7w/e16DUKVek1S5YMmf4TcseOpPlN3bVJ6tMmk9qyAtTvorG3wP/ACndfhoeFpfwblu7fUZqat11AOsrROG2j2exFDJiO9d6ytUZiVytVzbri51A00NugJ13OzGOrYgvXdcqljkHSygn3X2seM6fEUC4sxGXlaNRwqrZVAAHAQ7hpJtQw/lg8EdD5wqnxnytBUtAfOSayh0lDGufCvTMf0l4fDKWN0PUqBCewzQLsekuYSncwQS1+thL+DXSXaSdVLlRy1mP2ixOVKrAgGnSdkuRYsqlra7902MQ9tOJnD9ri1ShUVQxN23KTwMriw78pE8mXbNuq2eLi41B1BGoIO4iWMXUsMo9ZhdndoAYbDgKwth6eVWBBUZRZSOBHLpLlSsbEm9z0MnXlUoWLq2VjwCk+wvK/ZJi9GnUtbMge3LNqB6Cw9JU2/igMJiSp8QpMABvudN3rNzs9hwlCmLfhAXyAsI76C3VBmc9C+73mljK6IPEwGnGZ9TaVFRa510BIsCT9JHdIrst86ZdWvSViNTbS8eaH/h1H/mseXuIbIElaICPMzNaOBFHgCijxQBiJG0nGgSBEiRCRrRkCRGtDRKNR5w2WlkCRvyjmNeS1NKGOpMPEu7iJdcyCvwMcJkBgdQZfwbBlpsOVvbT9JU2jhshzrxOq84tg1B3eX8tSoB5FiR8iJV9BtSJMbPGZpBoL8Ugw8VusE+IXMBfW8IzeIxkLXewEo41vF8oPEYu9QKOFvcwFard/MmVIBzwE0sOukzqQuwmizZRFRFZql6wHn9JZxTWU+UxaOJviR/dNLH1rKfKFgc/ga12qf1AfIQ+IxVmAvMvC10Rn4AXczPO0DUeyAljr0A5k8BHavHC10WKy1VFNycjkB7fluCw9RceslidrnPkTTw3sBcqu4eV/wBJUpeFd9zbUmVjiE1yWOvib8IPU8TOfPk34jq4+Ce7No1nd2bcLHUsczew/eZOMojQPUYqGBykgLob8Be3S9pcqWUgPUY3BdrEKPXj85jYnF4cue7pmqb2zIjVcpvb4zcDWYV14z4Wj2hI0LsbcQVAtwjSjXoOWJ7jlxpcvOKH5Mvsfh4vp6/HijzteMaIR4oAo8aKAKNHjQI0UUV4Axkqe+RkqW/0gIIzSN5ImNeJQFauoNjv5Sni8U9vCLDjzk9oUUY3O/mCQfcTMdHX4KgYflqW/wD0P2lSBTx208nicG3E6m3WB7O7RNZq5pi6d4Mr/gI7tPhPHW+6Z/bHFuMMy+Km7VcOmhsSj1kVspHMEi4nR7DwyJSRVFgANJOWerqN8eLePdVwZ/zewFpTxtWsdKYcji4BNxrcLYG58gfeaRXcOZt8j+1vWX1FhpJm/dRlqeI8u7SbQxVOjSNKtlatiO4ps5DuAvxuvhHiB0s9reYsNXB1a1Omo79yQALsQ7aDf4r/AFnO/aoyLisg54TFaDxd8Xak9vOmqS/UrgYd7b+7bzuRp9ZOW7nJG2ExnFcrPsbs3tatWxdEOwKu5Nsqg21YfICegfcqd75dfM/vPNuyAAx1DkCyj0RtZ6gGnb1Mkymnn8Ntl2glFQbjfFVpg79fcSREhn5znbK5wVMEMEW43HW8k4U6MAfOWC0g6AxhTbZeHa96Kaix03iSTBU0XJTRFXiFRVB87CSZiJIVdLw0N1WqfwluB4L+K28X4nmIGpTRhfKpB6CaIIOh3GYGIJw1XKb9y58B/IfymOQbvs2I2fROa9Kmc1s2emr3tu3jrKtXZ1JgAVtltopKrblYcPKadQ3FxKGIe0OzG/B/kznq060yBZcoA3AU0t84pQ++EaRSu2I7q720eOIrTM0Y15IwZMZJXj3g80WaA2neNeQzRs0C2neMTIZoiYEfNCUjr6SuTCYc6nyhYcvlZMFWfwki/pA4moSco3cesOBZYlqqUzvKgdWOvziNK+5mv/KSR84SlTLHMx04CWRYbo7Q5vbPZlsQNa2oqLUUPTzKMpBA0I0uB7SxgsDiKagPka35G0t5MBNwyDdSJncZbtpOWyaUHJ0NrMpzBT4b6EED0PvaAxPaWgg+GsWtu7l1X1qEZPZj0vNGqfK3XdMnaGz86MFygcyNBx0NwbgysYjK7cNtzAJX2hXZmvUpBGqgG6mqy2UL/KqhR5i/HWGN/h0eeZkzeriaNTYFanVr4hXp5aljUpnNbwgKMpucugA43t6zJ25iVKZBfNnRiLG1gee7eRxhx4Zfmxt+2+eeP4LJ9F2Mxg+/YYcTUe/QZX/Sess4G/da88U7KkrjsIx/9xTX0LZf1nsDE2ZfO06+pn7RwcHqrIqiMzXldTYAwyMJzabGeppBisZOqNJUY2jgXGN5UcEX5SS1JFnjBqWI4GExVJaqFG3Eex5yrVTiINK5GhhoM4O9E5H1Ubj0jVHD8RNTEqtRdd85rF02RtOEqEr1bhiOsUTYgE3ijJ6cscxCKYrQaBcwzQFSVE0MtGzxESJWNHki8bPEVjZIEmGj3kFWTtA4YmJWsfrE0gTA1or4hCVeUhQa4B9JJzIaGzRZ4gnE6CQq4ymnHXpqYAQIxjVPDawueZsAJRfaLt8K2HM74PKTqxJ893tHobHrYgHd4j/oH7wBBY6m/wBBJWjhuUogqtPMCthl433GUcZspKiFGAynkLa7xaaqoTJNlXfqeA/eOXRa24VOydWnVpVEsypVp1NbK1lYHduM7qoPE3mY9E3YX3m/0jvxjz5LlrZY4TH0EBpaRpvbSTaDMlQ+eV6scGIsIAFFMTNJ1Kw4Sq7xkKXletEXgalSMHo1bSjtSx1EnVqShXrRkoMNYpIuIoB6oIowMRMxUi0C8K0GYyodossnHgWg8sWSEtHtDY0EFiKwmWMRAaBYQJEsssGySoVPhH3j1EJUq23b5WsQbxq9YDmPLfFZ5VKhVFRt7WHtAhKa7zcyBemd5qn0iFWkPwOfaMCfeBwEkHY9IL74o3Uj6mI4yodyqPS5gFlKRPOOzou868l1MqeNviYnpwhEoAQMUYgncMo+Z9ZFF8VyYVKMIUVd8Ag7WKsOEGWJ4iRrOWOg0kkoGAMet5AmWhhjJpQAMNhTNF+XzEobQxSUcvfVEph2yoarrTDNa9gWOpsN03yRunm323UO9w+Ep2vfEM3shH+6KUOlTFo3wujf0urfQx3qTy7s5sEU0sFGu/SdVhMDkA1IPQ2lk3auLA/aBZ6jbhb+rSUiSu5jfneJajne594gNUon8T+2krHL+AFuvD3Mu4bDK5Gax146/WdIdhUeJe3EZgL+wvDZOCdGud31inptJAoCqAFAsABYCKGwtAxXkAY95Oj2TGDMcmQJgSUkIPNJqYtAQCStIqZMRKNaRIk5EmADIkCIQmQMaQmEBUQHfLDGBeUQNPDAmwLDTgb/AFj1MIwHxA+a/tD4XefKWKg0it8qx9Mdjbeo9DJK45H2lqtSgO7jNJHEMlRYBUj93reAXFqrE5UyuaV4SmkWgMjKJLvRANSgqi2ho1s1oNnMps1he8AlZiL3j0TSUzku3eFNRsPpcKKh9Tlmsa7c5VxBzb9bbo9DbCwOEygXEtNLNQCVapjIB4PPFUaDzRG08C+s7ZToPIThdnG5na4Z7oh5qL+fGJIt4pGKATEeKKARaBcxRQKohjC0zFFHSg6mTBiikqK8iTFFEaBaDZ4opURQWeBepFFLkIfAG+b0lkxRTPL20w9B1FgWSKKKKRCyarHijIREkwseKI0SIGuuvoIooBRxpNrCV6YNoopaQGvAPeKKMK9QHlKlRTy+cUUQAqU2tu+krFG5fMRRRBpYJCOHAcROw2SxNFb9R84ooEtWjxRRB//Z';

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <div />
            </div>
            <div>
                <div>
                    <img src={avatarnull} alt="avatar" />
                    <div>
                        <strong>
                            name name name name name name name name name name name name name name name name name name
                            name name
                        </strong>
                    </div>
                    <div>{COMMENT_BEFORE}</div>
                </div>
                <div>{ctn}</div>
                <div>
                    <LazyImage src={img} alt="img" />
                </div>
                <div>
                    <div>
                        <div>99</div>
                        <div>
                            <AiFillLike size={20} color="rgb(195, 195, 195)" />
                            <div>{LIKE}</div>
                        </div>
                    </div>
                    <div>
                        <div>9999</div>
                        <div>
                            <AiFillDislike size={20} color="rgb(195, 195, 195)" />
                            <div>{DIS_LIKE}</div>
                        </div>
                    </div>
                    <div>
                        <div>9999</div>
                        <div>
                            <BsReply size={20} />
                            <div>{REPLY}</div>
                        </div>
                    </div>
                    <div>
                        <div>66</div>
                        <div>
                            <RiShareForwardFill size={20} />
                            <div>{SHARE}</div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <textarea rows={1} placeholder={COMMENT} /> */}
                    <CommentInput />
                </div>
            </div>
        </div>
    );
};

export default Center;
