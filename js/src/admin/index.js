/*
 * This file is part of Hot Discussions Widget.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/hot-discussions', () => {
    registerWidget(app);
    app.extensionData
      .for('justoverclock-hot-discussions')
      .registerSetting({
        setting: 'justoverclock-hot-discussions.discLimit',
        name: 'justoverclock-hot-discussions.discLimit',
        type: 'number',
        label: app.translator.trans('justoverclock-hot-discussions.admin.discLimit'),
        help: app.translator.trans('justoverclock-hot-discussions.admin.discLimit-help'),
      })
});
