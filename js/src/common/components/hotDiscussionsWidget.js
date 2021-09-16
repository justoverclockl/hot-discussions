/*
 * This file is part of Hot Discussions Widget.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import app from 'flarum/forum/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Link from "flarum/common/components/Link";

export default class hotDiscussionsWidget extends Widget {
    oninit(vnode) {
        super.oninit(vnode);
        this.loading = true;
    }

    oncreate(vnode) {
        const limitHotDisc = app.forum.attribute('justoverclock-hot-discussions.discLimit') || 10;
        // get discussions object
        const hotDisc = app.store
            .find('discussions', {
                isApproved: true,
                exists: true,
                sort: '-commentCount',
                page: { limit: limitHotDisc },
            })
            .then((results) => {
                this.hotDisc = results;
                this.loading = false;
                m.redraw();
            });
    }

    className() {
        // css class for the container
        return 'hotDiscussions-widget';
    }

    icon() {
        // Widget icon.
        return 'fab fa-hotjar hotwdg';
    }

    title() {
        // Widget title.
        return app.translator.trans('justoverclock-hot-discussions.forum.widget-title');
    }

    content() {
        if (this.loading) {
            return <LoadingIndicator />;
        }
        return (
            <div className="hotDiscussion-content">
                <ul className="hotDisc fa-ul">
                    {this.hotDisc.map((disc) => {
                        return (
                            <li class="hotDiscWidget">
                                <i class="fas fa-caret-right hotdiscIcon"></i>
                                <Link href={app.route.discussion(disc)} alt={disc.title()} className="hotDiscLink">
                                   {disc.title()}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
