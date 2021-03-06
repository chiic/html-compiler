const { Parser, traverser, generatorCode } = require('../../dist');
const { writeFile } = require('fs');
const { resolve } = require('path');


const parser = new Parser(`
<div class="content-wrapper">
    <div class="content">
        <div class="main-content J-content">
            <div class="top-tool ">
                <a class="add-sub-icon top-tool-icon" href="javascript:;" title="添加义项" nslog-type="50000101">
                    <em class="cmn-icon wiki-lemma-icons wiki-lemma-icons_add-subLemma-solid"></em>
                </a>
                <a href="/divideload/%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E5%BB%BA%E5%85%9A%E6%97%A5"
                    title="拆分词条" target="_blank" class="split-icon top-tool-icon" style="display:none;"
                    nslog-type="50000104">
                    <em class="cmn-icon wiki-lemma-icons wiki-lemma-icons_lemma-split"></em>
                </a>
                <div class="top-collect top-tool-icon" nslog="area" nslog-type="50000102">
                    <em class="cmn-icon wiki-lemma-icons wiki-lemma-icons_star-solid"></em>
                    <span class="collect-text">收藏</span>
                    <div class="collect-tip">查看<a href="/uc/favolemma" target="_blank">我的收藏</a></div>
                </div>
                <a href="javascript:void(0);" id="j-top-vote" class="top-vote top-tool-icon" nslog-type="10060801">
                    <em class="cmn-icon wiki-lemma-icons wiki-lemma-icons_zan-solid"></em>
                    <span class="vote-count">2613</span>
                    <span class="vote-tip">有用+1</span>
                    <span class="voted-tip">已投票</span>
                </a>
                <div class="bksharebuttonbox top-share">
                    <a class="top-share-icon top-tool-icon" nslog-type="9067">
                        <em class="cmn-icon wiki-lemma-icons wiki-lemma-icons_share"></em>
                        <span class="share-count" id="j-topShareCount">566</span>
                    </a>
                    <div class="new-top-share" id="top-share">
                        <ul class="top-share-list">
                            <li class="top-share-item">
                                <a class="share-link bds_qzone" href="javascript:void(0);" nslog-type="10060501">
                                    <em class="cmn-icon cmn-icons cmn-icons_logo-qzone"></em>
                                </a>
                            </li>
                            <li class="top-share-item">
                                <a class="share-link bds_tsina" href="javascript:void(0);" nslog-type="10060701">
                                    <em class="cmn-icon cmn-icons cmn-icons_logo-sina-weibo"></em>
                                </a>
                            </li>
                            <li class="top-share-item">
                                <a class="bds_wechat" href="javascript:void(0);" nslog-type="10060401">
                                    <em class="cmn-icon cmn-icons cmn-icons_logo-wechat"></em>
                                </a>
                            </li>
                            <li class="top-share-item">
                                <a class="share-link bds_tqq" href="javascript:void(0);" nslog-type="10060601">
                                    <em class="cmn-icon cmn-icons cmn-icons_logo-qq"></em>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style="width:0;height:0;clear:both"></div>
            <dl class="lemmaWgt-lemmaTitle lemmaWgt-lemmaTitle-">
                <dd class="lemmaWgt-lemmaTitle-title J-lemma-title" data-pid="0">
                    <h1>中国共产党建党日</h1>
                    <a class="cmn-btn-28 cmn-btn-hover-blue audio-play title-audio-play J-title-audio-play"
                        href="javascript:;"><em class="cmn-icon wiki-lemma-icons wiki-lemma-icons_audio"></em><span
                            class="J-audio-text">语音</span></a>
                    <a href="javascript:;" class="edit-lemma cmn-btn-hover-blue cmn-btn-28 j-edit-link"><em
                            class="cmn-icon wiki-lemma-icons wiki-lemma-icons_edit-lemma"></em>编辑</a>
                    <a class="lock-lemma" nslog-type="10003105" target="_blank" href="/view/10812319.htm" title="锁定"
                        style="display: inline;"><em
                            class="cmn-icon wiki-lemma-icons wiki-lemma-icons_lock-lemma"></em>锁定</a>
                    <a href="javascript:;" class="cannot-add-video cmn-btn-hover-blue cmn-btn-28 J-add-video-dialog">
                        <em
                            class="cmn-icon wiki-lemma-icons cannot-add-video-icon wiki-lemma-icons_add-video"></em>上传视频</a>
                </dd>
            </dl>
            <div class="promotion-declaration">
            </div>
            <div class="lemma-summary" label-module="lemmaSummary">
                <div class="para" label-module="para" data-pid="1"><a target="_blank"
                        href="/item/%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A/117227"
                        data-lemmaid="117227">中国共产党</a>于1921年7月23日成立后，在反动军阀政府的残暴统治之下，只能处于秘密状态，没有公开进行活动的环境。在<a
                        target="_blank" href="/item/%E5%A4%A7%E9%9D%A9%E5%91%BD/9408281"
                        data-lemmaid="9408281">大革命</a>时期，党忙于国共合作、开展工农运动和支援<a target="_blank"
                        href="/item/%E5%8C%97%E4%BC%90%E6%88%98%E4%BA%89/281719"
                        data-lemmaid="281719">北伐战争</a>，没有条件对党的诞生进行纪念。把7月1日作为中国共产党的诞辰纪念日，是毛泽东同志于1938年5月提出来的。当时，<a
                        target="_blank" href="/item/%E6%AF%9B%E6%B3%BD%E4%B8%9C/113835"
                        data-lemmaid="113835">毛泽东</a>在《<a target="_blank"
                        href="/item/%E8%AE%BA%E6%8C%81%E4%B9%85%E6%88%98/365843"
                        data-lemmaid="365843">论持久战</a>》一文中提出：“今年七月一日，是中国共产党建立的十七周年纪念日”。这是中央领导同志第一次明确提出“七一”是党的诞生纪念日。<sup
                        class="sup--normal" data-sup="1" data-ctrmap=":1,">
                        [1]</sup><a class="sup-anchor" name="ref_[1]_160972">&nbsp;</a>
                </div>
            </div>
            <div class="lemmaWgt-promotion-leadPVBtn">
            </div>
            <div class="configModuleBanner">
            </div>
            <div class="basic-info J-basic-info cmn-clearfix" data-pid="card">
                <dl class="basicInfo-block basicInfo-left">
                    <dt class="basicInfo-item name">中文名</dt>
                    <dd class="basicInfo-item value">
                        建党节
                    </dd>
                    <dt class="basicInfo-item name">节日时间</dt>
                    <dd class="basicInfo-item value">
                        7月1号
                    </dd>
                    <dt class="basicInfo-item name">节日起源</dt>
                    <dd class="basicInfo-item value">
                        党的诞生纪念日
                    </dd>
                </dl>
                <dl class="basicInfo-block basicInfo-right">
                    <dt class="basicInfo-item name">节日意义</dt>
                    <dd class="basicInfo-item value">
                        中国共产党的诞辰纪念日
                    </dd>
                    <dt class="basicInfo-item name">设立机构</dt>
                    <dd class="basicInfo-item value">
                        中国共产党
                    </dd>
                    <dt class="basicInfo-item name">设定时间</dt>
                    <dd class="basicInfo-item value">
                        1938年5月
                    </dd>
                </dl>
            </div>
            <div class="lemmaWgt-lemmaCatalog">
                <div class="lemma-catalog">
                    <h2 class="block-title">目录</h2>
                    <div class="catalog-list column-1">
                        <ol>
                            <li class="level1">
                                <span class="index">1</span>
                                <span class="text"><a href="#1">节日历史</a></span>
                            </li>
                            <li class="level1">
                                <span class="index">2</span>
                                <span class="text"><a href="#2">确立日期</a></span>
                            </li>
                            <li class="level1">
                                <span class="index">3</span>
                                <span class="text"><a href="#3">庆祝形式</a></span>
                            </li>
                            <li class="level1">
                                <span class="index">4</span>
                                <span class="text"><a href="#4">历年活动</a></span>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
            <div class="anchor-list ">
                <a name="1" class="lemma-anchor para-title"></a>
                <a name="sub160972_1" class="lemma-anchor "></a>
                <a name="节日历史" class="lemma-anchor "></a>
            </div>
            <div class="para-title level-2" label-module="para-title" data-pid="2">
                <h2 class="title-text"><span class="title-prefix">中国共产党建党日</span>节日历史</h2>
                <a class="audio-play part-audio-play J-part-audio-play" href="javascript:;"><em
                        class="cmn-icon wiki-lemma-icons wiki-lemma-icons_audio"></em>
                    <span class="J-part-audio-text">语音</span>
                </a>
            </div>
            <div class="para" label-module="para" data-pid="3">
                <div class="lemma-picture J-lemma-picture text-pic layout-right" style="width:220px; float: right;">
                    <a class="image-link" nslog-type="9317"
                        href="/pic/%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E5%BB%BA%E5%85%9A%E6%97%A5/2906957/0/b7003af33a87e950190ee95513385343fbf2b4e9?fr=lemma&amp;ct=single"
                        target="_blank" title="1921.7.1" style="width:220px;height:74.8px;">
                        <img class=""
                            src="https://bkimg.cdn.bcebos.com/pic/b7003af33a87e950190ee95513385343fbf2b4e9?x-bce-process=image/resize,m_lfit,w_440,limit_1/format,f_auto"
                            alt="1921.7.1" style="width:220px;height:74.8px;">
                    </a>
                    <span class="description">
                        1921.7.1
                    </span>
                </div>
                1920年初，李大钊和陈独秀等人开始酝酿建党的问题。在法国留学的蔡和森则明确提出应该建立“中国共产党”。在共产国际代表的帮助下，上海、北京、武汉、广州、长沙、济南等地的先进知识分子，建立了党的早期组织。在法国和日本留学的青年学生，也成立了党的早期组织。
            </div>
            <div class="para" label-module="para" data-pid="4">
                1921年7月23日，中国共产党第一次全国代表大会在上海举行。参加会议的各地代表有：李达、李汉俊、张国焘、刘仁静、毛泽东、何叔衡、王尽美、邓恩铭、陈潭秋、董必武、周佛海、陈公博，包惠僧受陈独秀派遣参加了会议。他们代表着全国50多名党员。共产国际代表马林和尼科尔斯基列席了会议。在会议进行过程中，突然有法租界巡捕闯进了会场，会议被迫中断。于是，最后一天的会议，便转到了浙江嘉兴南湖的一艘游船上举行。经过讨论，大会通过了中国共产党的第一个纲领和决议，并选举产生党的领导机构——中央局。党的一大宣告了中国共产党的正式成立。<sup
                    class="sup--normal" data-sup="2" data-ctrmap=":2,">
                    [2]</sup><a class="sup-anchor" name="ref_[2]_160972">&nbsp;</a>
            </div>
            <div class="anchor-list ">
                <a name="2" class="lemma-anchor para-title"></a>
                <a name="sub160972_2" class="lemma-anchor "></a>
                <a name="确立日期" class="lemma-anchor "></a>
            </div>
            <div class="para-title level-2" label-module="para-title" data-pid="5">
                <h2 class="title-text"><span class="title-prefix">中国共产党建党日</span>确立日期</h2>
                <a class="audio-play part-audio-play J-part-audio-play" href="javascript:;"><em
                        class="cmn-icon wiki-lemma-icons wiki-lemma-icons_audio"></em>
                    <span class="J-part-audio-text">语音</span>
                </a>
            </div>
            <div class="para" label-module="para" data-pid="6"><b>七月一日：中国共产党诞生纪念日</b></div>
            <div class="para" label-module="para" data-pid="7">
                中国共产党第一次全国代表大会于1921年7月23日召开，而党的诞生纪念日是7月1日。为什么两者的时间不一致呢？为什么7月1日成了党的诞生纪念日呢？</div>
            <div class="para" label-module="para" data-pid="8">
                把7月1日作为党的诞生纪念日，是毛泽东于1938年5月提出来的。当时，毛泽东在《论持久战》一文中提出：“今年七月一日，是中国共产党建立十七周年纪念日。”这是中央领导同志第一次明确提出“七一”是党的诞生纪念日。
            </div>
            <div class="para" label-module="para" data-pid="9">
                当时在延安的曾经参加过一大的党的创始人只有毛泽东、董必武两人。他们回忆一大是7月份召开的，但记不清楚确切的开会日期。因为缺乏档案材料，一时无法查证，所以就把7月1日确定为党的诞生纪念日。</div>
            <div class="para" label-module="para" data-pid="10">
                “七一”作为党的诞生纪念日，最早见于中央文件是1941年6月。当时，中共中央发出《关于中国共产党诞生二十周年、抗日四周年纪念指示》。《指示》说：“今年七一是中共产生的二十周年，七七是中国抗日战争的四周年，各抗日根据地应分别召集会议，采取各种办法，举行纪念，并在各种刊物出特刊或特辑。”这是以中共中央名义作出的把“七一”作为党的诞生纪念日进行纪念的第一个文件。
            </div>
            <div class="para" label-module="para" data-pid="11">
                党的一大开幕日期到20世纪70年代末才由党史工作者考证清楚，根据新发现的史料和考证成果，确定一大的召开日期是1921年7月23日。</div>
            <div class="para" label-module="para" data-pid="12">
                虽然党的诞生纪念日并不是党的一大召开的具体日期，“七一”这个光辉的节日已经深深地铭刻在全党和全国各族人民的心中。它成为人们每年进行纪念的一个重要节日，也成为中国节日文化的一部分。<sup
                    class="sup--normal" data-sup="2-3" data-ctrmap=":2,:3,">
                    [2-3]</sup><a class="sup-anchor" name="ref_[2-3]_160972">&nbsp;</a>
            </div>
            <div class="anchor-list ">
                <a name="3" class="lemma-anchor para-title"></a>
                <a name="sub160972_3" class="lemma-anchor "></a>
                <a name="庆祝形式" class="lemma-anchor "></a>
            </div>
            <div class="para-title level-2" label-module="para-title" data-pid="13">
                <h2 class="title-text"><span class="title-prefix">中国共产党建党日</span>庆祝形式</h2>
                <a class="audio-play part-audio-play J-part-audio-play" href="javascript:;"><em
                        class="cmn-icon wiki-lemma-icons wiki-lemma-icons_audio"></em>
                    <span class="J-part-audio-text">语音</span>
                </a>
            </div>
            <div class="para" label-module="para" data-pid="14"><a
                    class="lemma-album layout-right nslog:10000206 J-lemma-album" title="建党节活动图册"
                    href="/pic/%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E5%BB%BA%E5%85%9A%E6%97%A5/2906957/20058044/faedab64034f78f09fbb29d971310a55b3191c63?fr=lemma&amp;ct=cover"
                    target="_blank" style="width:222px;" nslog-type="10000206">
                    <div class="album-wrap" style="width:220px;height:311.59059474412px;">
                        <img class="picture" alt="建党节活动图册"
                            src="https://bkimg.cdn.bcebos.com/pic/faedab64034f78f09fbb29d971310a55b3191c63?x-bce-process=image/resize,m_lfit,w_220,limit_1/format,f_auto"
                            style="width:220px;height:311.59059474412px;">
                    </div>
                    <div class="description">
                        建党节活动图册<span class="number">(3张)</span>
                    </div>
                    <div class="albumBg" style="width:220px;">
                    </div>
                </a>1、召开建党周年纪念大会。设主会场和分会场，分会场进行电视直播会议实况。</div>
            <div class="para" label-module="para" data-pid="15">2、组织开展以“党员找组织、组织找党员”为主题的非公企业党建工作推进月活动。</div>
            <div class="para" label-module="para" data-pid="16">3、组织开展“当优秀公仆、创一流事业”征文活动。</div>
            <div class="para" label-module="para" data-pid="17">4、举办入党积极分子培训班和新党员宣誓仪式。</div>
            <div class="para" label-module="para" data-pid="18">5、召开党务干部座谈会。</div>
            <div class="para" label-module="para" data-pid="19">6、各基层党组织召开一次民主生活会。</div>
            <div class="para" label-module="para" data-pid="20">7、评选和表彰先进基层党组织和优秀共产党员。</div>
            <div class="para" label-module="para" data-pid="21">8、开展送温暖活动，各基层党组织开展走访慰问困难党员活动，机关组织青年党员走访慰问建国前老党员活动。</div>
            <div class="para" label-module="para" data-pid="22">9、组织两级干部和党员骨干观看党风廉政教育专题片。</div>
            <div class="para" label-module="para" data-pid="23">
                每年中国建党节，部队都组织盛大的纪念活动，庆祝自己的节日。各级政府，也组织隆重的军民联欢晚会或座诫会，邀请老红军、军队离退休干部复员退伍军人、革命伤残军人及烈军属代表参加。同时，还要组织拥军优属活动，宣传人民军队的光荣传统，检查优抚工作的落实情况，发现问题和困难及时给予解决。
            </div>
            <div class="anchor-list ">
                <a name="4" class="lemma-anchor para-title"></a>
                <a name="sub160972_4" class="lemma-anchor "></a>
                <a name="历年活动" class="lemma-anchor "></a>
            </div>
            <div class="para-title level-2" label-module="para-title" data-pid="24">
                <h2 class="title-text"><span class="title-prefix">中国共产党建党日</span>历年活动</h2>
                <a class="audio-play part-audio-play J-part-audio-play" href="javascript:;"><em
                        class="cmn-icon wiki-lemma-icons wiki-lemma-icons_audio"></em>
                    <span class="J-part-audio-text">语音</span>
                </a>
            </div>
            <div class="para" label-module="para" data-pid="25">
                2011年7月1日，庆祝中国共产党成立90周年大会在北京人民大会堂隆重举行。中共中央总书记胡锦涛在大会上发表重要讲话。<sup class="sup--normal" data-sup="4"
                    data-ctrmap=":4,">
                    [4]</sup><a class="sup-anchor" name="ref_[4]_160972">&nbsp;</a>
            </div>
            <div class="para" label-module="para" data-pid="26">
                2016年7月1日，庆祝中国共产党成立95周年大会在北京人民大会堂隆重举行。中共中央总书记、国家主席、中央军委主席习近平在大会上发表重要讲话。<sup class="sup--normal"
                    data-sup="5" data-ctrmap=":5,">
                    [5]</sup><a class="sup-anchor" name="ref_[5]_160972">&nbsp;</a>
            </div>
            <div class="anchor-list ">
                <a name="album-list" class="lemma-anchor "></a>
            </div>
            <div class="album-list">
                <div class="header">
                    <span class="title">词条图册</span>
                    <a class="more-link"
                        href="/pic/%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E5%BB%BA%E5%85%9A%E6%97%A5/2906957?fr=lemma"
                        target="_blank" nslog-type="10000204">更多图册<em></em></a>
                </div>
                <div class="scroller">
                    <div class="list">
                    </div>
                </div>
                <div class="footer">
                </div>
            </div>
            <dl class="lemma-reference collapse nslog-area log-set-param" data-nslog-type="2"
                log-set-param="ext_reference">
                <dt class="reference-title">参考资料</dt>
                <dd class="reference-list-wrap">
                    <ul class="reference-list">
                        <li class="reference-item reference-item--type1 " id="reference-[1]-160972-wrap">
                            <span class="index">1.</span>
                            <a class="gotop anchor" name="refIndex_1_160972" id="refIndex_1_160972" title="向上跳转"
                                href="#ref_[1]_160972">&nbsp;&nbsp;</a>
                            <a rel="nofollow"
                                href="/reference/2906957/5b6cATabOP9QLMHkMMRt4_03vn-1Uxypr7aGH6BSVaqM0U49m_sVj5rXxiUXQeW9HAkKaYFnMqIH_Gy4xjnw_CBh01NLAwp1cmkP-NS_xpZe"
                                target="_blank" class="text">“七一”建党纪念日与逢十大庆<span class="linkout">&nbsp;</span></a>
                            <span class="site">．解放军报社</span><span>[引用日期2019-07-02]</span>
                        </li>
                        <li class="reference-item reference-item--type1 " id="reference-[2]-160972-wrap">
                            <span class="index">2.</span>
                            <a class="gotop anchor" name="refIndex_2_160972" id="refIndex_2_160972" title="向上跳转"
                                href="#ref_[2]_160972">&nbsp;&nbsp;</a>
                            <a rel="nofollow"
                                href="/reference/2906957/c835vmu4vW_GJ1j_TMcjN3J9J5ULOEiQ6bf60I_YV0stYbfwbm4nEpJaaKIJBqsjZ99J5rZ1tJp0TKCd25wXDgDdFeh_34e_kMBV"
                                target="_blank" class="text">中国共产党的成立<span class="linkout">&nbsp;</span></a>
                            <span class="site">．人民网</span><span>[引用日期2019-07-02]</span>
                        </li>
                        <li class="reference-item reference-item--type1 " id="reference-[3]-160972-wrap">
                            <span class="index">3.</span>
                            <a class="gotop anchor" name="refIndex_3_160972" id="refIndex_3_160972" title="向上跳转"
                                href="#ref_[3]_160972">&nbsp;&nbsp;</a>
                            <a rel="nofollow"
                                href="/reference/2906957/c998y5zySQKa-l4idSzkAk3hqAq_eZpcK_SiPydKQ7RLTdIGdUWOWcXWRwvc21GfSurS16YEcicCMj356Nr4xNIZ8EMVDcNpXTfgbkCAhqtr4xXjH5pjyccD"
                                target="_blank" class="text">为什么7月1日是党的“诞生纪念日”而非“诞生日”<span
                                    class="linkout">&nbsp;</span></a>
                            <span class="site">．人民网</span><span>[引用日期2019-07-02]</span>
                        </li>
                        <li class="reference-item reference-item--type1 " id="reference-[4]-160972-wrap">
                            <span class="index">4.</span>
                            <a class="gotop anchor" name="refIndex_4_160972" id="refIndex_4_160972" title="向上跳转"
                                href="#ref_[4]_160972">&nbsp;&nbsp;</a>
                            <a rel="nofollow"
                                href="/reference/2906957/98aaZkKUq4Ywx2wmdQyH9HiDYnplHlzDgn0HRUqKJJvzsklsdcMMfqazuGD9m1g70mBPqFkdhSsQML-cj6kwrvCMLukMCiRcb45hTE1xwLES30UtMFzUyVXHXZAuFoyHAAgvUSQK"
                                target="_blank" class="text">胡锦涛总书记在庆祝中国共产党成立90周年大会上发表 重要讲话<span
                                    class="linkout">&nbsp;</span></a>
                            <span class="site">．中国日报网</span><span>[引用日期2019-07-02]</span>
                        </li>
                        <li class="reference-item reference-item--type1 " id="reference-[5]-160972-wrap">
                            <span class="index">5.</span>
                            <a class="gotop anchor" name="refIndex_5_160972" id="refIndex_5_160972" title="向上跳转"
                                href="#ref_[5]_160972">&nbsp;&nbsp;</a>
                            <a rel="nofollow"
                                href="/reference/2906957/5ef4jzqb7M9CSF_3xb-VBdeD64tv_gI0vpbz6dnPvHtWlnoklQTiS_MDNo6Y63aEvk86Xqyex9S22Igzd1g7vp-GRldvuQga2rKqVj5NVNgSB4pVO2LUaaXmdkfzJSTEPw"
                                target="_blank" class="text">庆祝中国共产党成立95周年大会在京隆重举行<span
                                    class="linkout">&nbsp;</span></a>
                            <span class="site">．中国人大</span><span>[引用日期2019-07-02]</span>
                        </li>
                    </ul>
                </dd>
            </dl>
            <div class="lemma-paper-box">
                <dl class="lemma-paper collapse">
                    <dt class="paper-title">
                        <span class="sciencePaper-title">学术论文</span>
                        <div class="sciencePaper-from">
                            内容来自<a class="sciencePaper-link" href="https://xueshu.baidu.com/?site=baike"
                                nslog-type="80200001" target="_blank">
                                <img src="https://bkssl.bdimg.com/static/wiki-lemma/widget/lemma_content/mainContent/lemmaSciencePaper/img/science_logo_f1bd60c.png"
                                    class="sciencePaper-logo">
                            </a>
                        </div>
                    </dt>
                    <dd class="sciencePaper-list-wrap">
                        <ul class="sciencePaper-list">
                            <li class="sciencePaper-item" nslog-type="80200002">
                                <a href="https://xueshu.baidu.com/usercenter/paper/show?paperid=c7ce1d18eb302f2727c3b4190512315e&amp;tn=SE_baiduxueshu_c1gjeupa&amp;ie=utf-8&amp;site=baike"
                                    target="_blank" class="text-link">
                                    <span class="interrupt authors">宋志勇，吴远.</span>
                                    <span class="interrupt punctuation">&nbsp;&nbsp;</span>
                                    <span class="interrupt title">中国共产党建党九十年来的对日政策．</span>
                                </a>
                                <span class="interrupt punctuation">《</span>
                                <span class="interrupt publishedAt">CNKI</span>
                                <span class="interrupt punctuation">》</span>
                                <span class="interrupt punctuation">，</span>
                                <span class="interrupt time">2011</span>
                            </li>
                            <li class="sciencePaper-item" nslog-type="80200002">
                                <a href="https://xueshu.baidu.com/usercenter/paper/show?paperid=6b8d4e6a8088ec624a88974c9527b804&amp;tn=SE_baiduxueshu_c1gjeupa&amp;ie=utf-8&amp;site=baike"
                                    target="_blank" class="text-link">
                                    <span class="interrupt authors">吴海勇.</span>
                                    <span class="interrupt punctuation">&nbsp;&nbsp;</span>
                                    <span class="interrupt title">关于中国共产党建党标志日的历史考辨．</span>
                                </a>
                                <span class="interrupt punctuation">《</span>
                                <span class="interrupt publishedAt">vip</span>
                                <span class="interrupt punctuation">》</span>
                                <span class="interrupt punctuation">，</span>
                                <span class="interrupt time">2016</span>
                            </li>
                            <li class="sciencePaper-item" nslog-type="80200002">
                                <a href="https://xueshu.baidu.com/usercenter/paper/show?paperid=933415b4f34964af28a5da29b6b66ec7&amp;tn=SE_baiduxueshu_c1gjeupa&amp;ie=utf-8&amp;site=baike"
                                    target="_blank" class="text-link">
                                    <span class="interrupt authors">中央文明办调研组.</span>
                                    <span class="interrupt punctuation">&nbsp;&nbsp;</span>
                                    <span class="interrupt title">中国共产党建党纪念日的起源．</span>
                                </a>
                                <span class="interrupt punctuation">《</span>
                                <span class="interrupt publishedAt">VIP</span>
                                <span class="interrupt punctuation">》</span>
                                <span class="interrupt punctuation">，</span>
                                <span class="interrupt time">2011</span>
                            </li>
                            <li class="sciencePaper-item" nslog-type="80200002">
                                <a href="https://xueshu.baidu.com/usercenter/paper/show?paperid=6288401e4dc484e62fc15dd245e3dc7c&amp;tn=SE_baiduxueshu_c1gjeupa&amp;ie=utf-8&amp;site=baike"
                                    target="_blank" class="text-link">
                                    <span class="interrupt authors">王新宏.</span>
                                    <span class="interrupt punctuation">&nbsp;&nbsp;</span>
                                    <span class="interrupt title">凝望——写在中国共产党建党90周年纪念日前夕．</span>
                                </a>
                                <span class="interrupt punctuation">《</span>
                                <span class="interrupt publishedAt">CNKI</span>
                                <span class="interrupt punctuation">》</span>
                                <span class="interrupt punctuation">，</span>
                                <span class="interrupt time">2011</span>
                            </li>
                            <li class="sciencePaper-item" nslog-type="80200002">
                                <a href="https://xueshu.baidu.com/usercenter/paper/show?paperid=160323fefa4fb4c07b38304df7e0f158&amp;tn=SE_baiduxueshu_c1gjeupa&amp;ie=utf-8&amp;site=baike"
                                    target="_blank" class="text-link">
                                    <span class="interrupt authors">谢勇.</span>
                                    <span class="interrupt punctuation">&nbsp;&nbsp;</span>
                                    <span class="interrupt title">红火的日子 甜蜜的生活——纪念中国共产党建党九十周年．</span>
                                </a>
                                <span class="interrupt punctuation">《</span>
                                <span class="interrupt publishedAt">中国蜂业</span>
                                <span class="interrupt punctuation">》</span>
                                <span class="interrupt punctuation">，</span>
                                <span class="interrupt time">2011</span>
                            </li>
                        </ul>
                    </dd>
                    <dd class="toggle">
                        <a href="https://xueshu.baidu.com/s?wd=intitle%3A%28%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E5%BB%BA%E5%85%9A%E6%97%A5%29&amp;tn=SE_baiduxueshu_c1gjeupa&amp;ie=utf-8&amp;sc_from=pingtai6&amp;site=baike"
                            nslog-type="80200003" target="_blank" class="text">
                            <span>查看全部</span>
                            <img src="https://bkssl.bdimg.com/static/wiki-lemma/widget/lemma_content/mainContent/lemmaSciencePaper/img/toggle_185d48f.svg"
                                class="toggle-arrow" alt="">
                        </a>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="side-content">
            <div class="summary-pic">
                <a nslog-type="10002401"
                    href="/pic/%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E5%BB%BA%E5%85%9A%E6%97%A5/2906957/1/562c11dfa9ec8a13d5d30403f903918fa1ecc00c?fr=lemma&amp;ct=single"
                    target="_blank">
                    <img
                        src="https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a13d5d30403f903918fa1ecc00c?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg">
                    <button class="picAlbumBtn"><em></em><span>图集</span></button>
                    <div>中国共产党建党日的概述图（1张）</div>
                </a>
            </div>
            <div class="lemmaWgt-promotion-vbaike">
                <div class="promotion_title">V百科<a href="/vbaike#gallary" target="_blank">往期回顾</a></div>
                <div class="promotion_viewport">
                    <dl>
                    </dl>
                    <div class="promotion_viewport_pager"></div>
                </div>
            </div>
            <div class="lemmaWgt-promotion-rightPreciseAd" data-lemmaid="2906957" data-lemmatitle="中国共产党建党日"></div>
            <div class="lemmaWgt-promotion-slide">
                <div class="promotion_viewport">
                    <dl>
                    </dl>
                    <div class="promotion_viewport_pager"></div>
                </div>
            </div>
            <div class="lemmaWgt-promotion-rightBigAd">
            </div>
            <div class="side-catalog" style="visibility: hidden; bottom: 10px; top: auto;">
                <div class="side-bar">
                    <em class="circle start"></em>
                    <em class="circle end"></em>
                </div>
                <div class="catalog-scroller">
                    <dl class="catalog-list">
                        <dt class="catalog-title level1">
                            <em class="pointer"></em>
                            <a href="#1" class="title-link">
                                <span class="text">
                                    <span class="title-index">1</span>
                                    <span class="title-link" nslog-type="10002802">节日历史</span>
                                </span>
                            </a>
                        </dt>
                        <dt class="catalog-title level1">
                            <em class="pointer"></em>
                            <a href="#2" class="title-link">
                                <span class="text">
                                    <span class="title-index">2</span>
                                    <span class="title-link" nslog-type="10002802">确立日期</span>
                                </span>
                            </a>
                        </dt>
                        <dt class="catalog-title level1">
                            <em class="pointer"></em>
                            <a href="#3" class="title-link">
                                <span class="text">
                                    <span class="title-index">3</span>
                                    <span class="title-link" nslog-type="10002802">庆祝形式</span>
                                </span>
                            </a>
                        </dt>
                        <dt class="catalog-title level1">
                            <em class="pointer"></em>
                            <a href="#4" class="title-link">
                                <span class="text">
                                    <span class="title-index">4</span>
                                    <span class="title-link" nslog-type="10002802">历年活动</span>
                                </span>
                            </a>
                        </dt>
                        <a class="arrow" href="javascript:void(0);" style="top: 5px;"></a>
                    </dl>
                </div>
                <div class="right-wrap" style="display: none;">
                    <a class="go-up disable" href="javascript:void(0);"></a>
                    <a class="go-down disable" href="javascript:void(0);"></a>
                </div>
            </div>
        </div>
    </div>
</div>    
`);

const ast = parser.parse();

writeFile(resolve(__dirname, './ast.json'), JSON.stringify(ast, null, '\t'), (err) => {
    console.log('parser successfully!');
});

writeFile(resolve(__dirname, './test.html'), generatorCode(ast), (err) => {
    console.log('parser successfully!');
});