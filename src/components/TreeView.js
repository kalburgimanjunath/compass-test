import React from 'react';
export default function TreeView(){
    return (
        <>
        <div className="collapse" id="collapseExample">
                <div className="card card-body">
                <div className="well">
                    <div>
                        <ul className="nav nav-list">
                            <li><label className="tree-toggler nav-header">Main Building 1</label>
                                <ul className="nav nav-list tree">
                                    <li><a href="#">Link</a></li>
                                    <li><a href="#">Link</a></li>
                                    <li><label className="tree-toggler nav-header">Main Building 1.1</label>
                                        <ul className="nav nav-list tree">
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><label className="tree-toggler nav-header">Main Building 1.1.1</label>
                                                <ul className="nav nav-list tree">
                                                    <li><a href="#">Link</a></li>
                                                    <li><a href="#">Link</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li><label className="tree-toggler nav-header">Main Building 2</label>
                                <ul className="nav nav-list tree">
                                    <li><a href="#">Link</a></li>
                                    <li><a href="#">Link</a></li>
                                    <li><label className="tree-toggler nav-header">Main Building 2.1</label>
                                        <ul className="nav nav-list tree">
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><label className="tree-toggler nav-header">Main Building 2.1.1</label>
                                                <ul className="nav nav-list tree">
                                                    <li><a href="#">Link</a></li>
                                                    <li><a href="#">Link</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><label className="tree-toggler nav-header">Main Building 2.2</label>
                                        <ul className="nav nav-list tree">
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><label className="tree-toggler nav-header">Main Building 2.2.1</label>
                                                <ul className="nav nav-list tree">
                                                    <li><a href="#">Link</a></li>
                                                    <li><a href="#">Link</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>  
                </div>
            </div>
          
        </>
    )
}