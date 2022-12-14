export const Footer = () => {
    return (
        <div className="h-16 w-9/12 m-auto flex justify-center flex-col">
            <div className='h-9'>
                <a href="https://about.meta.com/" target="blank" className='text-xs m-2.5 text-gray-500'>Meta</a>
                <a href="https://about.instagram.com/" target="blank" className='text-xs m-2.5 text-gray-500'>About</a>
                <a href="https://about.instagram.com/blog/" target="blank" className='text-xs m-2.5 text-gray-500'>Blog</a>
                <a href="https://about.instagram.com/about-us/careers" target="blank" className='text-xs m-2.5 text-gray-500'>jobs</a>
                <a href="https://help.instagram.com/" target="blank" className='text-xs m-2.5 text-gray-500'>Help</a>
                <a href="https://developers.facebook.com/docs/instagram" target="blank" className='text-xs m-2.5 text-gray-500'>API</a>
                <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect" className='text-xs m-2.5 text-gray-500'>Privacy</a>
                <a href="https://help.instagram.com/581066165581870/" className='text-xs m-2.5 text-gray-500'>Terms</a>
                <a href="https://www.instagram.com/directory/profiles/" className='text-xs m-2.5 text-gray-500'>Top Accounts</a>
                <a href="https://www.instagram.com/directory/hashtags/" className='text-xs m-2.5 text-gray-500'>Hashtags</a>
                <a href="https://www.instagram.com/explore/locations/" className='text-xs m-2.5 text-gray-500'>Locations</a>
                <a href="https://www.instagram.com/web/lite/" className='text-xs m-2.5 text-gray-500'>Instagram Lite</a>
                <a href="https://www.facebook.com/help/instagram/261704639352628" className='text-xs m-2.5 text-gray-500'>Contact Uploading & Non-users</a>
            </div>
            <div className='flex justify-center'>
                <div className='text-xs text-gray-500 mt-4 mr-10'>
                    <select className="w-16" name="language" id="lang">
                        <option value="en">English</option>
                        <option value="af">Afrikaans</option>
                        <option value="cs">??e??tina</option>
                        <option value="da">Dansk</option>
                        <option value="de">Deutsch</option>
                        <option value="el">????????????????</option>
                        <option value="en-gb">English (UK)</option>
                        <option value="es">Espa??ol (Espa??a)</option>
                        <option value="es-la">Espa??ol</option>
                        <option value="fi">Suomi</option>
                        <option value="fr">Fran??ais</option>
                        <option value="id">Bahasa Indonesia</option>
                        <option value="it">Italiano</option>
                        <option value="ja">?????????</option>
                        <option value="ko">?????????</option>
                        <option value="ms">Bahasa Melayu</option>
                        <option value="nb">Norsk</option>
                        <option value="nl">Nederlands</option>
                        <option value="pl">Polski</option>
                        <option value="pt-br">Portugu??s (Brasil)</option>
                        <option value="pt">Portugu??s (Portugal)</option>
                        <option value="ru">??????????????</option>
                        <option value="sv">Svenska</option>
                        <option value="th">?????????????????????</option>
                        <option value="tl">Filipino</option>
                        <option value="tr">T??rk??e</option>
                        <option value="zh-cn">??????(??????)</option>
                        <option value="zh-tw">??????(??????)</option>
                        <option value="bn">???????????????</option>
                        <option value="gu">?????????????????????</option>
                        <option value="hi">??????????????????</option>
                        <option value="hr">Hrvatski</option>
                        <option value="hu">Magyar</option>
                        <option value="kn">???????????????</option>
                        <option value="ml">??????????????????</option>
                        <option value="mr">???????????????</option>
                        <option value="ne">??????????????????</option>
                        <option value="pa">??????????????????</option>
                        <option value="si">???????????????</option>
                        <option value="sk">Sloven??ina</option>
                        <option value="ta">???????????????</option>
                        <option value="te">??????????????????</option>
                        <option value="vi">Ti???ng Vi???t</option>
                        <option value="zh-hk">??????(??????)</option>
                        <option value="bg">??????????????????</option>
                        <option value="fr-ca">Fran??ais (Canada)</option>
                        <option value="ro">Rom??n??</option>
                        <option value="sr">????????????</option>
                        <option value="uk">????????????????????</option>
                    </select>
                </div> <div className='h-9 -ml-6 text-xs text-gray-500 mt-4'>?? 2022 Instagram from Meta</div>
            </div>
        </div>
    )
}